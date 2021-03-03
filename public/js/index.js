/* eslint-disable no-undef */





/** validate email using validator.js each time you enter something in a the email input*/
const validateEmail =(value,emailPrompt)=>{
  let isEmail=false;
  if(!validator.isEmail(value)){
    // what to do if not email
    emailPrompt.innerHTML='✘';
    emailPrompt.classList.add('error');
    isEmail=false;
  }else{
    emailPrompt.innerHTML='✔';
    emailPrompt.classList.remove('error');
    isEmail=true;
  }
  return isEmail;
};


/** validate password using regular expressions */
const validatePassword =(value,isuppercasePrompt,islowercasePrompt,eightcharPrompt,numberPrompt)=>{
  let hasUppercase=false;
  let hasLowercase=false;
  let hasNumber=false;
  let hasEightPlusChars=false;
  if(!/[A-Z]/.test(value)){
    // what to do if not email
    isuppercasePrompt.innerHTML='✘';
    isuppercasePrompt.classList.add('error');
    hasUppercase=false;
  }else{
    isuppercasePrompt.innerHTML='✔';
    isuppercasePrompt.classList.remove('error');
    hasUppercase=true;
  }

  if(!/[a-z]/.test(value)){
    // what to do if not email
    islowercasePrompt.innerHTML='✘';
    islowercasePrompt.classList.add('error');
    hasLowercase=false;
  }else{
    islowercasePrompt.innerHTML='✔';
    islowercasePrompt.classList.remove('error');
    hasLowercase=true;
  }

  if(value.length<8){
    // what to do if not email
    eightcharPrompt.innerHTML='✘';
    eightcharPrompt.classList.add('error');
    hasEightPlusChars=false;
  }else{
    eightcharPrompt.innerHTML='✔';
    eightcharPrompt.classList.remove('error');
    hasEightPlusChars=true;
  }

  if(!/[0-9]/.test(value)){
    // what to do if not email
    numberPrompt.innerHTML='✘';
    numberPrompt.classList.add('error');
    hasNumber=false;
  }else{
    numberPrompt.innerHTML='✔';
    numberPrompt.classList.remove('error');
    hasNumber=true;
  }
  return hasNumber*hasEightPlusChars*hasLowercase*hasUppercase;
};




const homePage =`<div class='home'>

<h2> Join Chat</h2>

<form class='form'>
<div class="form-control">
  <input type="email" name="email" placeholder="Email"/>
  <div class="prompts">
    <div class="isemail">email <span></span></div>
  </div>
</div>
<div class="form-control">
  <input type="password" name="password" placeholder="Password"/>
  <div class="prompts">
    <div class="isuppercase">uppercase <span class='error'></span></div>
    <div class="islowercase">lowercase <span></span></div>
    <div class="isnumber">number <span></span></div>
    <div class="eightchar">8+ character <span></span></div>

  </div>
</div>
<div class='prompts'>
<span id='generalPrompt'></span>
</div>
<div class="buttons">
  <button type="submit">Sign Up</button>
</div>
<div class="toggle-container">
  <span>Already registered?</span> <a>Sign in</a>
</div>
</form>

</div>
`;

const profilePage= (user)=>`
<div class="profile">
<h2>CHAT APP</h2>

<div id='menu'>
<section id='user-profile' class="${user.id}">
<img src="${user.avatar}" alt="${user.username}" />
<div class="name">${user.username}</div>
<div class="email">${user.email}</div>
</section>
<h3>USERS:</h3>
<section id="users-list">


</section>

<form>
<button type='submit' id='logout'>Log out</button>
</form>
</div>

<div id="chat">
<section id="chat-header">
CHATING WITH:
<div id="receiver" >Public </div>
</section>

<section id="chat-list"></section>

<section id="chat-inputs">
  <input type="text" name="text-box"  placeholder="Send text" />
</section>
</div>
<div id='conversations'>

<!-- groups -->
<h3>Groups:</h3>
<section id="groups">
  <div id="" class='is-active'>
    <img src="https://image.flaticon.com/icons/png/512/32/32441.png" alt="public" />
    <div class="name">
    Public
    </div>
  </div>
</section>
<h3>INBOX:</h3>
<!-- inbox -->
<section id="inbox">

</section>
</div>

</div>
`;

const populateChat = async(receiverId)=>{

  const userId = document.querySelector('#user-profile').classList[0];

  const query = receiverId?{
    $or:[
      {
        receiverId:userId,
        senderId:receiverId
      },
      {
        receiverId,
        senderId:userId
      },
    ]
    ,
    $sort:{
      createdAt:1
    }
  }:{
    receiverId:null,
    $sort:{
      createdAt:1
    }
  };
  const chatMsgResponse = await app.service('messages').find({
    query
  });

  document.querySelector('#chat-list').innerHTML='';

  chatMsgResponse.data.forEach(
    ({text,createdAt,sender:{id,avatar,username}})=>{
      const classname = id!=userId ? 'yours':'others';

      document.querySelector('#chat-list').innerHTML +=`
      <div class="chat-list__item ${classname}">
        <img src="${avatar}" alt="${username}/>
        <div class="chat-list__item-text">${text}</div>
        <div class="chat-list__item-date">${createdAt}</div>
      </div>
      `;


    }
  );

};

const mainContainer = document.querySelector('.container');

const renderUserInfo = ({username,avatar,email,isOnline})=>`

      <img src="${avatar}" name="${username}"/>
      <div  class="name">${username}</div>
      <div class="email">${email}</div>
      <div class="indicator">${isOnline?'online':'offline'}</div>

`;

const selectUserListItem=(item)=> {

  const receiverDiv =document.querySelector('#receiver');

  item.addEventListener('click',async () =>{



    if(!item.classList.contains('is-active')){
      item.classList.add('is-active');
    }

    document.querySelectorAll('.is-active').forEach(active=>{
      if(!active.isEqualNode(item)){
        active.classList.remove('is-active');
        if(receiverDiv.classList.contains(active.id)){
          receiverDiv.classList.remove(active.id);

        }
      }
    });

    const id =item.id||null;




    let username ='';
    item.childNodes.forEach(child =>{
      // child whose classname is username.
      if(child.className=='name'){
        username =(child.innerHTML);
      }
    });



    //
    receiverDiv.innerHTML=username;

    if(id){
      receiverDiv.classList.add(id);
    }

    await populateChat(id);
  });



};

const getHasConversation =(id)=>{

  var BreakException = {};
  let hasConversation = false;

  document.querySelector('#inbox').childNodes.forEach(node=>{
    try{
      if (node.id==id){
        hasConversation=true;
        throw BreakException;
      }
    }catch(e){
      if (e !== BreakException) throw e;
    }

  });
  return hasConversation;
};

const renderInboxInfo =(text,{avatar,username,isOnline})=>`
<img src="${avatar}" name="${username}"/>
<div  class="name" style="display:none;">${username}</div>
<div>
<div class="text">${text}</div>
<div class="indicator">${isOnline?'online':'off'}</div>
`;

const renderInboxItems = async () =>{

  const userId = document.querySelector('#user-profile').classList[0];


  const inboxData = await app.service('messages').find({query:{
    receiverId:userId,
    $sort:{
      createdAt:1
    }
  }});

  inboxData.data.map(({text,senderId,sender})=>{
    console.log(senderId);

    const hasConversation = getHasConversation(senderId);

    if(hasConversation){
      document.getElementById(senderId).innerHTML=renderInboxInfo(text,sender);
    }else{
      document.querySelector('#inbox').innerHTML +=`
    <div id="${senderId}">
    ${renderInboxInfo(text,sender)}
</div>

</div>
    `;
    }

  });
};



const main = async()=>{

  try{
    // if logged in, load profile
    const {user} = await app.reAuthenticate();



    mainContainer.innerHTML=profilePage(user);



    const logoutBtn = document.querySelectorAll('#logout')[0];

    logoutBtn.addEventListener('click',async()=>{
      await app.logout();
      location.reload();
    });

    const userId = document.querySelector('#user-profile').classList[0];



    const {data}= await app.service('users').find({
      query:{
        id:{
          $ne:userId
        }
      }
    });



    await renderInboxItems();

    app.service('messages').on('created',async()=>{
      const receiverId = document.getElementById('receiver').classList[0];
      await Promise.all(
        [
          renderInboxItems(),
          populateChat(receiverId)
        ]
      );
    });

    data.forEach(({id,...user})=>{
    // check has conversation
      const hasConversation = getHasConversation(id);
      if(!hasConversation){
        document.querySelector('#users-list').innerHTML+=`
  <div id="${id}" class='users-list__item'>
  ${renderUserInfo(user)}
  </div>
  `;
      }

    });


    app.service('users').on('patched',async(user)=>{

      const parentDiv = document.getElementById(user.id);
      console.log(parentDiv);
      if(parentDiv){
        parentDiv.innerHTML=renderUserInfo(user);
      }
    });

    document.querySelector('#inbox').childNodes.forEach(selectUserListItem);
    document.querySelector('#users-list').childNodes.forEach(selectUserListItem);
    document.querySelector('#groups').childNodes.forEach(selectUserListItem);




    await populateChat(null);


    document.querySelector('input[name=text-box]')
      .addEventListener('keyup',async({key,target})=>{

        if(key=='Enter'&&target.value){
          const receiverId=document.querySelector('#receiver').classList[0]||null;

          const text = target.value;
          await app.service('messages').create({text,receiverId});
          target.value='';
        }


      });


  }catch(error){
    console.log(error);
    // if login fails, load homepage
    mainContainer.innerHTML=homePage;

    // Selects the first <a> elements where the parent is of class toggle-container element
    const toggleAnchor = document.querySelectorAll('.toggle-container > a')[0];
    // Selects the first <span> elements where the parent is of class toggle-container element
    const toggleSpan = document.querySelectorAll('.toggle-container > span')[0];
    // Selects the first button element that is a descendant of an element with .buttons class
    const submitButton = document.querySelectorAll('.buttons button')[0];
    // Selects input element with name="email"
    const emailInput = document.querySelectorAll('input[name="email"')[0];
    const emailPrompt =document.querySelector('.isemail >span');
    // Selects input element with name="password"
    const passwordInput = document.querySelectorAll('input[name="password"')[0];
    const isuppercasePrompt =document.querySelector('.isuppercase >span');
    const islowercasePrompt =document.querySelector('.islowercase >span');
    const eightcharPrompt =document.querySelector('.eightchar >span');
    const numberPrompt =document.querySelector('.isnumber >span');

    emailInput.addEventListener('keyup',({target:{value}})=>validateEmail(value,emailPrompt));

    passwordInput.addEventListener('keyup',({target:{value}})=>validatePassword(value,isuppercasePrompt,islowercasePrompt,eightcharPrompt,numberPrompt));


    /**
 * add a click event listener that
 1.toggles the its content from Sign up to Sign in
 2.toggles the content of the span element which is its sibling form "Already registered" to "Not registered?"
*/
    toggleAnchor.addEventListener('click', () =>{
      const content = toggleAnchor.innerHTML;
      if(content ==='Sign in'){
        toggleAnchor.innerHTML='Sign up';
        toggleSpan.innerHTML='Not registered?';
        submitButton.innerHTML='Sign In';
      }else{
        toggleAnchor.innerHTML='Sign in';
        toggleSpan.innerHTML='Already registered?';
        submitButton.innerHTML='Sign Up';
      }
    });


    /**
 * Now depending on the type of form, we can determine the action that our submit button renders.
 * ~ if it says Sign Up then when clicked it should run the function for registering the user
 * ~ if it says Sign In then it should un the function that logs in the user
*/
    submitButton.addEventListener('click',async(e)=>{
      e.preventDefault();
      const email =emailInput.value;
      const password =passwordInput.value;

      if(validateEmail(email,emailPrompt)&&validatePassword(password,isuppercasePrompt,islowercasePrompt,eightcharPrompt,numberPrompt)){

        try{
          if(submitButton.innerHTML=='Sign Up'){

            await app.service('users').create({email,password});

          }

          await app.authenticate({
            strategy: 'local',
            email,
            password
          });
          location.reload();
        }catch(err){
          const generalPrompt= document.querySelector('#generalPrompt');
          generalPrompt.classList.add('error');
          console.log(err);
          const {errors:{withDigits,withLowercase,withUppercase,longEnough}} =err;
          console.log(err);
          switch(err.message){
          case 'Invalid login':
            generalPrompt.innerHTML = 'Invalid username or password';

            break ;

          case 'validation-error':


            if(withUppercase){
              // what to do if not email
              isuppercasePrompt.innerHTML='✘';
              isuppercasePrompt.classList.add('error');

            }

            if(withLowercase){
              // what to do if not email
              islowercasePrompt.innerHTML='✘';
              islowercasePrompt.classList.add('error');

            }

            if(longEnough){
              // what to do if not email
              eightcharPrompt.innerHTML='✘';
              eightcharPrompt.classList.add('error');

            }

            if(withDigits){
              // what to do if not email
              numberPrompt.innerHTML='✘';
              numberPrompt.classList.add('error');

            }

            break;
          default:
            console.log(err);
            generalPrompt.innerHTML = err.message;
            break;
          }
        }

      }


    });


  }


};

main();


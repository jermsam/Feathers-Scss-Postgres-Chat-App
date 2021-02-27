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
<div class='user-profile'>
<img src="${user.avatar}" alt="${user.username}" />
<p>${user.username}</p>
<p>${user.email}</p>
</div>

<div class="users-list">

</div>


<form>
<button type='submit' id='logout'>Log out</button>
</form>
</div>
`;



const mainContainer = document.querySelector('.container');

const renderUserInfo = ({username,avatar,email,isOnline})=>`
<div>__________________________________________</div>
      <img src="${avatar}" name="${username}"/>
      <div>${username}</div>
      <div>${email}</div>
      <div>${isOnline?'online':'offline'}</div>
      <div>__________________________________________</div>
`;

const main = async()=>{

  try{
    // if logged in, load profile
    const {user} = await app.reAuthenticate();
    console.log(user);
    mainContainer.innerHTML=profilePage(user);

    const logoutBtn = document.querySelectorAll('#logout')[0];

    logoutBtn.addEventListener('click',async()=>{
      await app.logout();
      location.reload();
    });

    // users list



    const usersListPannel = document.querySelector('.users-list');

    const {data}= await app.service('users').find({
      query:{
        id:{
          $ne:user&&user.id
        }
      }
    });

    data.forEach(({id,...user})=>{
      usersListPannel.innerHTML+=`
      <div id="${id}">
      ${renderUserInfo(user)}
      </div>
      `;
    });

    app.service('users').on('patched',async(user)=>{
      if(user){
        document.getElementById(user.id).innerHTML=renderUserInfo(user);
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
        toggleSpan.innerHTML='ALready registered?';
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


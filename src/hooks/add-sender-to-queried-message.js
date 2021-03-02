// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const addSender = async (app,msg) =>{
  const userId = msg.senderId;

  // Also pass the `params` so we get a secure version of the user
  const user = await app.service('users').get(userId,);

  msg.sender= user;

};

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {method,app,}=context;
    if(method=='find'){
      await Promise.all(
        context.result.data.map(
          async msg=> await addSender(app,msg)
        )
      ) ;

    }else{


      await addSender(app,context.result);


    }
    return context;
  };
};

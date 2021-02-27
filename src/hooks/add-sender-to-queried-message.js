// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const addSender = async (app,msg,params) =>{
  const userId = msg.senderId;

  // Also pass the `params` so we get a secure version of the user
  const user = await app.service('users').get(userId, params);
  msg.sender= user;

};

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {method,app,params}=context;
    if(method=='find'){
      await Promise.all(
        context.result.data.map(
          async msg=> await addSender(app,msg,params)
        )
      ) ;

    }else{


      await addSender(app,context.result,params);


    }
    return context;
  };
};

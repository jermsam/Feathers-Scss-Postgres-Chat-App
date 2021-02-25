const { Service } = require('feathers-sequelize');

const randomColor = require('randomcolor');


exports.Users = class Users extends Service {

  create(data,params){
    const randomcolor =randomColor({luminosity: 'dark'}).replace('#','');
    const username =data.email.split('@')[0];
    const avatar =`https://ui-avatars.com/api/?background=${randomcolor}&color=fff&name=${username}`;
    data.username=username;
    data.avatar=avatar;
    return super.create(data,params);
  }

};

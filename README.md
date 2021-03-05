# chat-app-postgres

> A chat app styled with Scss and Served with a Restful and Websocket API built  using feathersjs

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
I decided to style the UI with Sassy CSS (Scss - Syntactically Awesome Style Sheet) to appeal to the taste of any UI developer regardless of the Framework or UI technology they are using. 
  - [Here is why I did not go Css](https://www.geeksforgeeks.org/what-is-the-difference-between-css-and-scss/)
  - [Still wanted the css feel though, so I chose Scss and not Sass](https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass/)
  - [Click here to check it out in production](https://feathers-chat-app.herokuapp.com/). 

## WOuld you rather run it locally?

Getting up and running is as easy as 1, 2, 3,4.

1. Make sure you have  installed:
  [NodeJS](https://nodejs.org/),
  [postgres](https://www.postgresql.org/docs/9.3/installation.html)
  [yarn](https://yarnpkg.com/).
2. Install your dependencies

    ```
    cd path/to/chat-app-postgres
    yarn
    ```

3. Configure the app to run locally
    - create a database and take note of its: user, password, databasename
    - create a .env file in the project root and defile the environment variables below

    ```
    POSTGRES = postgres://youruser:yourpassword@localhost:5432/yourdatabasename
    ```
    - go to the `migrations/config.js` and `src/sequelize.js` files and comment out the following `ssl configuration block` as below:
   
   ```
    dialectOptions: {
    /**
      ssl:{
        sslStrict: false, // turning off sslStrict mode
        rejectUnauthorized: false, // disabling its ability to reject Unauthorised connections
      }
    **/
    }
    ```
    (This was added for production to disable ssl verification since herokupostgres database does not allow clients that are not ssl verified. We did not configure      SSL for our production app since its just a demo)
  4. run the app locally
      ```
      yarn dev
      ```
## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
# CHAT-APP

MERGE : Integrated backend to frontend.

To run the project : 
-- launch XAMPP
-- in phpmyadmin create a new DB : "testdb" and that's it,
-- in the project : npm install
-- (*) ERROR when Signing Up BUT : you will be able to Sign In with the account you just created, working on this issue  

Frontend changes : 
- added an .env file which store the running port of the client (8081), it helps avoid a potential CORS problem
- minor corrections made in the Admin and Moderator components 

Backend :
- Uses : Express / bcryptjs / jsonwebtoken / Sequelize / MySQL libraries
- On the website of "Network Error", you have now the title of the page you're on : "Public Content" / "User content", etc. 
- On the website you can see your profile when clicking on the profile button with different informations.
- Token authentification works! when logged in you can see it in your profile page OR in the browser developper tools : >right click>inspect>storage>local storage.
- The user is prohibited to create a new account that use a username or an email that is already in the DB.
- The user can't access "http://localhost:8081/mod" or "http://localhost:8081/admin" without having the required privileges. You can modify the privileges in the DB. 


for detailed explanations : https://www.bezkoder.com/node-js-jwt-authentication-mysql/

(*) : "Cannot add or update a child row: a foreign key constraint fails (`testdb`.`user_roles`, CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)" 


# Node.js – JWT Authentication & Authorization example with JSONWebToken & Sequelize

## User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![jwt-token-authentication-node-js-example-flow](jwt-token-authentication-node-js-example-flow.png)

For more detail, please visit:
> [Node.js JWT Authentication & Authorization example](https://bezkoder.com/node-js-jwt-authentication-mysql/)

You may need to implement Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

> [Node.js JWT Refresh Token example](https://bezkoder.com/jwt-refresh-token-node-js/)

Working with Front-end:
> [Vue](https://www.bezkoder.com/jwt-vue-vuex-authentication/)

> [Angular 8](https://www.bezkoder.com/angular-jwt-authentication/) / [Angular 10](https://www.bezkoder.com/angular-10-jwt-auth/) / [Angular 11](https://www.bezkoder.com/angular-11-jwt-auth/) / [Angular 12](https://www.bezkoder.com/angular-12-jwt-auth/) / [Angular 13](https://www.bezkoder.com/angular-13-jwt-auth/)

> [React](https://www.bezkoder.com/react-jwt-auth/) / [React + Redux](https://www.bezkoder.com/react-redux-jwt-auth/)

## More Practice:
> [Build Node.js Rest APIs with Express, Sequelize & MySQL](https://bezkoder.com/node-js-express-sequelize-mysql/)

> [Server side Pagination in Node.js with Sequelize and MySQL](https://bezkoder.com/node-js-sequelize-pagination-mysql/)

> [Node.js Express File Upload Rest API example](https://bezkoder.com/node-js-express-file-upload/)

> [Node.js Express File Upload with Google Cloud Storage example](https://bezkoder.com/google-cloud-storage-nodejs-upload-file/)

> [Node.js JWT Authentication & Authorization example with MongoDB](https://bezkoder.com/node-js-mongodb-auth-jwt/)

Associations:
> [Sequelize Associations: One-to-Many Relationship example](https://bezkoder.com/sequelize-associate-one-to-many/)

> [Sequelize Associations: Many-to-Many Relationship example](https://bezkoder.com/sequelize-associate-many-to-many/)

Deployment:
> [Deploying/Hosting Node.js app on Heroku with MySQL database](https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)

Integration on same Server/Port:
> [Integrate Vue with Node.js Express](https://www.bezkoder.com/serve-vue-app-express/)

> [Integrate Angular 8 with Node.js Express](https://www.bezkoder.com/integrate-angular-8-node-js/)

> [Integrate Angular 10 with Node.js Express](https://www.bezkoder.com/integrate-angular-10-node-js/)

> [Integrate Angular 12 with Node.js Express](https://www.bezkoder.com/integrate-angular-12-node-js/)

> [Integrate React with Node.js Express](https://www.bezkoder.com/integrate-react-express-same-server-port/)

## Project setup
```
npm install
```

### Run
```
node server.js
```

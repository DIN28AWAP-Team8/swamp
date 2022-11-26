BIG MERGE : Integrated backend to frontend.

To run the project : 
- launch XAMPP
- in phpmyadmin create a new DB : "testdb" and that's it,
- in the project : npm install
- (*) ERROR when Signing Up BUT : you will be able to Sign In with the account you just created, working on this issue  

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

To implement Refresh Token:

![jwt-refresh-token-node-js-example-flow](jwt-refresh-token-node-js-example-flow.png)

> [Node.js JWT Refresh Token example](https://bezkoder.com/jwt-refresh-token-node-js/)

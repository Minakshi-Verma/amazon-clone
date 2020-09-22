# amazonia
"Amazonia" is an e-commerce website. This is a complete application where user can select the item from the store, add them to cart and proceed to checkout like a any other e-commerce website. I have used paypal as a method of payment but intended to add several other options in future.

### Tech stack:
React.js || Redux || Node.js || Express || CSS || mongoDB || mongoose


### Required Dependancies and installation
---Backend---<br />
1. react-router-dom <br />
2. redux <br />
3. react-redux <br />
4. redux-thunk  // to perform async operation in redux since redux run synchronously by default
5. Axios <br />
6. js.cookies package(using npm install js.cookie@2.1.4) // to save the items after refresh <br />
7. dotenv (using npm install dotenv (backend folder ))
8. mongoose (using npm install mongoose)
9. jsonwebtoken (using npm install jsonwebtoken)
10. body-parser (using npm install body-parser) // body-parser is a middleware for express that provide data that user enters in post request in node application


create config file in backend folder and connect the server to mongodb database. 
If you dont have mongoDb installed, visit
http://mongodb.com/download-center/community


### Dev-Dependancies:
1-@babel/cli @babel/core @babel/node @babel/preset-env 
//we can use ES-6 syntax using that depenancy.Like we can ES-6 way of imports with node
2-nodemon

### Scripts
npm start

# backend
#### Database Schemas

The _Database Schemas_ for the `users` resources are:

### userSchema
| field   | data type        | metadata                    |
|---------|------------------|-----------------------------|
| name    | string           |required                     |
| email   | string           |required,unique,dropsdups    |
| password| string           |required                     |
| isAdmin | boolean          |required, default:false      |







### Folder Structure

```
|- controller
|   |-authController.js
|   |-userController.js
|- middleware
|   |-authMiddleware.js
|   |-passwordValidateMiddleware.js
|- models
|   |-user.js
|- public
|- routes
|   |-authRoutes.js
|   |-userRoutes.js
|- .env
|- package.json
|- server.js
```

### Controller

The controllers folder provides the required working login of the various routes.It has two basic router

- authController - Deals with authentication logic
  - register - registration logic
  - login - signin logic
- userController - Deals with user data logic
  - remove - logic for user delete in database
  - updateName - logic for updating user name
  - updateEmail - logic for updating user email
  - updatePassword - logic for updating Password

### Middleware

Provides the required custom middlewares for api routes. We have two custom middleware.

- authMiddleWare - deals with authentication of user by verifying jwt tokens.
- passwordValidateMiddleware - deals with server side password validation for minimum 8 chatacters with atleast 1 uppercase, 1 lowercase, 1 number, 1 special character

### Model

Custom Mongoose collection models for storing & manipulating user data and also for authentication. We have just one mongoose model which is the User Model.

- userModel

### Routes

The controllers folder provides the required working login of the various routes.It has two basic router

- authRoutes - API route for authentication of users
  - register - registration api route
  - login - login api route
- userRoutes - Routes for manipulating user data
  - remove - api router for user deletion
  - updateName - api router for updating user name
  - updateEmail - api route for updating email
  - updatePassword - api route for password updation

### .env

Contains the environment variables for the project

- MONGO_DB_URI - mongodb connection string
- DATABASE - database to be used (interview in this case).
- USER_COLLECTION - users collection which stores documents

### Server.js

Handles the overall express application and mongoDB Database Connection

# Setup for the local development environment

- **npm install synapse**

- Within the server file, require synapse and invoke it passing in the directory of your resources

```javascript
const { synapse } = require("synapse");
const api = synapse(path.resolve(__dirname, "./resources"));
```

- You can define your own resources during which you can expose endpoints, validate schemes and so on

  - ![Basic Setup](https://ibb.co/Tv9KBJ4)

  * This is the basic structure of a Resource class
  * There are a lot of built-in field decorators you can use to verify inputs, like Word(which takes min and max character count)
  * You can also define your own field decorators to suit your needs, however, most of the basic ones are provided

  * The schema decorator has access to methods such as select, extend, exclude

    - Select allows us to create a subset of fields with only the required parameters
    - Extend creates a new schema by creating a copy of the current instance's fields and then adding onto it any addition fields you may need
    - Exclude will cause the specified fields to not be passed through to the new schema

  * The expose decorator dynamically creates routes that are specified to the passed in endpoints

- Code Snippet

  - ![Example](https://ibb.co/FhVHFVk)

  * Our example here defines a method on the User class that is used to register new users and save it to our postgreSQL database.
  * We expose the endpoint "POST /" therefore whenever a post request comes into /api/user we will create an instance of the user fields while excluding the user_id and password and extending the hashing functionality to our password
  * In our method we first declare a method in order to check within our database to make sure that the username does not already exist, if it already exists, we will error out returning a status code of 403 and giving the message that the username must be unique
  * If it does not exist we create a query to insert the username and the hashed password into the database returning result of the User.create

- With these simple steps your application is ready to handle any network request coming its way

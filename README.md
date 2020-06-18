# Setup for the local development environment

- **npm install synapse**

- Within the server file, require synapse and invoke it passing in the directory of your resources

```javascript
const { synapse } = require("synapse");
const api = synapse(path.resolve(__dirname, "./resources"));
```

- # You can define your own resources during which you can expose endpoints, validate schemes and so on

  ![Basic Setup](https://i.ibb.co/Tv9KBJ4/Screen-Shot-2020-06-17-at-6-37-18-PM.png)

  - This is the basic structure of a Resource class
  - There are a lot of built-in field decorators you can use to verify inputs, like Word and Text
    - Both can take two optional arguments that determine how short or long an accepted input should be
      - The above example shows how usernames must be 3~16 characters
  - You can also define your own field decorators to suit your needs, however, most of the basic ones are provided

  - The schema decorator has access to the methods: select, extend, exclude

    - Select creates a new schema containing a subset of the instance's fields.
      - It takes the names of the fields which should be transferred to the new schema as arguments.
    - Extend creates a new schema containing all of the current instance's fields along with the additional fields you can pass in.
    - Exclude creates a new schema containing a subset of the instance's fields excluding those passed-in as arguments.

  - The expose decorator dynamically creates routes that are specified to the passed in endpoints.
  - By the time these routes are created, all inputs have been thoroughly verified and sanitized.

- # Code Snippet

  ![Example](https://i.ibb.co/p1yhSy6/Screen-Shot-2020-06-17-at-6-37-40-PM.png)

  - Here, we have a more complete example of a Resource class.
  - This example defines a method on the User class that is used to register new users and save it to a SQL database.
  - We expose the endpoint "POST /" which handles all POST requests to the "/api/user" endpoint.
  - Next, we hit the schema decorator, which in this case:

    - Excludes the user_id and password fields, removing them from the validation process
    - Extends(extracts) the password schema and in this case, hashes the password 6 times.

  - Finally, we are ready to handle the business logic. All inputs to these methods should be in an object.
  - We first give the method access to the username and password.
  - We then execute a query that verifies whether or not this user already exists within the database. This is to ensure that each username is unique.a
  - If the username is unique, we execute another query to add this entry into the database.

  - All requests must return an instance of the Resource or State class.
  - There are many built-in error messages that correspond to their own response status codes.
    - FORBIDDEN, for example, corresponds to a 403 status code and can return a custom message that is passed in.

- With these simple steps your application is ready to handle any network request coming its way

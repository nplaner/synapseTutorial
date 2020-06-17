# synapseTutorial

# Setup for the local development environment

- npm install synapse

- Within the server file, require synapse and invoke it passing in the directory of your resources

  - const { synapse } = require("synapse");
  - const api = synapse(path.resolve(\_\_dirname, "./resources"));

- You can define your own resources during which you can expose endpoints, validate schemes and so on

- When any of the predefined requests hit the particular endpoint, it will run your business logic

- With these simple steps your application is ready to handle any network request coming its way

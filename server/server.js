const express = require("express");
const { synapse } = require("synapse");
const path = require("path");
const enableWs = require("express-ws");

const port = 3000;

const app = express();
const api = synapse(path.resolve(__dirname, "./resources"));

enableWs(app);
app.ws("/api", api.ws);
app.use("/api", api.http);
app.use("/api", api.sse);

app.listen(port, () => console.log(`App listening on port ${port}!`));

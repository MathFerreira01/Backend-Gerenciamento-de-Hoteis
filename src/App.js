import express from "express";
import routes from "./routes/index.js";

const App = express();

App.use(express.json());
routes(App);

export default App;

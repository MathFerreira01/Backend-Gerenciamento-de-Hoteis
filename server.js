import App from "./src/App.js";

const port = process.env.PORT || 3000;

App.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

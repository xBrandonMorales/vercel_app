const { mostrarMensaje } = require("../script.js");

test("La función mostrarMensaje está definida", () => {
  expect(typeof mostrarMensaje).toBe("function");
});

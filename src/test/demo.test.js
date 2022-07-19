const { getSaludo, getUser } = require("./funcion");

describe("name", () => {
  test("este es el test 1 - numero igual", () => {
    expect(1 === 1).toBe(true);
  });

  test("este es el test 2 -Mensaje igual ", () => {
    //1. arrange / Inicio
    const message1 = "Hola";
    //2. Assert / Actions
    const message2 = message1.trim();
    //3. Assert / Observar el comportamiento
    expect(message1).toBe(message2);
  });

  test("este es el test 3  - getSaludo ", () => {
    const nombre = "Beto";
    const message = getSaludo(nombre);
    expect(message).toBe(`hola ${nombre}`);
  });

  test("este es el test 4  - getUser ", () => {
    const testUser = { uid: "ABC123", username: "Agosto" };
    const user = getUser();
    expect(testUser).toEqual(user);
  });
});

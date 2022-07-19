import { String } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";
describe("test en getGifs", () => {
  test("Debe retornar el arreglo de gifs", async () => {
    const gifs = await getGifs("Dragon Ball");

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.anything(String),
      title: expect.anything(String),
      url: expect.anything(String),
    });
  });
});

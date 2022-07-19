import { fireEvent, render, screen } from "@testing-library/react";
import { GifApp } from "../../GifApp";
import React from "react";
/* import { any } from "prop-types";
 */
/* import { AddCategory } from "../../src/components/AddCategory.jsx";
import { getGifs } from "../../src/helpers/getGifs.js"; */

beforeEach(() => {
  render(<GifApp></GifApp>);
});

describe("Test de <GifApp />", () => {
  /* Verificar estado inicial. */

  const titulo = screen.queryByRole("App-tituloylogo", { level: 1 });

  expect(titulo).not.toBeNull();
});

/* Verificar cambio en el estado de categorías. */

test("Verifica cambio en el estado de Categorias", () => {
  const input = screen.getByRole("textbox");
  const form = screen.getByRole("form");

  fireEvent.change(input, { target: { value: "Goku" } });
  fireEvent.submit(form);

  const titulo = screen.queryByRole("App-tituloylogo", { level: 1 });

  expect(titulo).not.toBeNull();
});

/* Testear funcionalidades creadas para el TP N1, reset y eliminar categorías.
 */

test("Debe verificar que se borren todas las categorias", () => {
  const button = screen.getByRole(button, { name: "reset-all" });
  expect(titulo).toBeNull();
});
/* test("Debe verificar que se borren todas las categorias", () => {
  const resetAll = expect(
    screen.getByTestId("head-categories").textContent
  ).toBe([]);
  const form = screen.getByRole("form");
  expect(screen.getByPlaceholderText).toBe("go go go");

  fireEvent.change(input, { target: { value: "Dragon Ball" } });
  fireEvent.submit(form);
}); */

test("Remove Category", () => {
  const category = "Dragon Ball";
  const categories = ["Goku", "Dragon Ball"];

  fireEvent.change("delete-category", { handleOnRemove });
  fireEvent.submit(form);

  expect(categories).toEqual(["Goku"]);
});

/*     const stateSetter = jest.fn();
    const deleteAllCategories = removeAllCategories(["pepe"], stateSetter); // Tiene categoria pepe y al pasarle el useState borra todo.

  /*   expect(deleteAllCategories.length).toBe(0);
   }); */

/* Testear al menos una de las funcionalidades extra creadas por ustedes en el TP N1.
 */

import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook, waitFor } from "@testing-library/react";

describe("Test en hook useFetcGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));
    console.log(result);
  });

  test("Debe testear que el estado inicial sea el correspondiente", () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));
    const { imagenes, loading } = result.current;
    expect(imagenes.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test("Debe retornar un arreglo de imagenes y el loading en false", async () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));

    await waitFor(() =>
      expect(result.current.imagenes.length).toBeGreaterThan(0)
    );

    const { imagenes, loading } = result.current;

    expect(imagenes.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });

  /*  test("Debe retornar un arreglo de imagenes y el loading en false", async () => {
    const { result } = renderHook(() => useFetchGif("One Punch"));
    await waitFor(() =>
      expect(result.current.imagenes.length).toBeGreaterThan(0)
    );

    const { imagenes, loading } = result.current;
    expect(imagenes.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  }); */
});

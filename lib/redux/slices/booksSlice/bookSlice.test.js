import { configureStore } from "@reduxjs/toolkit";
import reducer, { booksSlice } from "./booksSlice";

describe("booksSlice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      status: "loading",
      value: [],
    });
  });

  const previousState = {
    status: "idle",
    value: [],
  };

  it("should return the initial state", () => {
    expect(
      reducer(previousState, { type: "books/fetchBooks/pending" })
    ).toEqual({ status: "loading", value: [] });
  });

  it("should return the initial state", () => {
    expect(
      reducer(previousState, { type: "books/fetchBooks/fufilled" })
    ).toEqual({ status: "idle", value: [] });
  });
});

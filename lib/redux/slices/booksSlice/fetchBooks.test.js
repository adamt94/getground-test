import { fetchBooks, FetchBooksResult } from "./fetchBooks";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        books: [{ id: 1, title: "Book 1", author: "Author 1" }],
      }),
  })
);

describe("fetchBooks", () => {
  beforeEach(() => {});

  it("should fetch books from the API", async () => {
    const mockResult = {
      books: [{ id: 1, title: "Book 1", author: "Author 1" }],
    };

    const result = await fetchBooks();
    expect(result).toEqual(mockResult);
  });
});

export type Book = {
    book_author: string
    book_publication_city: string
    book_publication_country: string
    book_publication_year: string
    book_pages: string
    book_title: string
    id: number
}

type Filter = {
    type: string
    values: string[]
}

export type FetchBooksResult = {
    books: Book[]
}

export const fetchBooks = async ( page: number = 1, itemsPerPage: number = 10, filters: Filter[] = [{type: "all", values:['']}]
  ): Promise<FetchBooksResult> => {
    const data = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {page, itemsPerPage, filters} ),
      });
    
    const result = await data.json() as FetchBooksResult;
    return result;
  }
  
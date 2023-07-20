/* Instruments */
import { createAppAsyncThunk } from '../../createAppAsyncThunk'
import { fetchBooks } from './fetchBooks'


export const getBooks = createAppAsyncThunk(
    'books/fetchBooks',
    async (page: number) => {
      const response = await fetchBooks( page)
  
      // The value we return becomes the `fulfilled` action payload
      return response
    }
  )
import axios from 'axios'
import { userAction } from '@/entities/User'
import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'
import { fetchArticleById } from './fetchArticleById'

const data = {
  id: '1',
  title: 'Article',
  subtitle: 'Article description',
  views: 20000,
  createdAt: '21.02.2032',
}

describe('FetchArticleById.test', () => {
  test('Success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  })

  test('Rejected with 403 status code', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected');
  })
})

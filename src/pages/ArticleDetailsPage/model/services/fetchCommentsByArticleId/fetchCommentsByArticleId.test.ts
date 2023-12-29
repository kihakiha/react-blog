import axios from 'axios'
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

const data = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1'
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '2'
  },
  {
    id: '1',
    text: 'some comment',
    articleId: '2',
    userId: '1'
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '2',
    userId: '2'
  }
]

describe('fetchCommentsByArticleId.test', () => {
  test('Success', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  })

  test('Rejected with 403 status code', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected');
  })
})

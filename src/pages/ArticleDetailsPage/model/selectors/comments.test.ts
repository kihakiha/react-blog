import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './comments'

describe('comments.test', () => {
  test('getArticleDetailsCommentsError', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      }
    }
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('error')
  })

  test('getArticleDetailsCommentsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      }
    }
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true)
  })
})

import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticlesDetails'

describe('getArticlesDetails.test', () => {
  test('getArticleDetailsData', () => {
    const data = {
      id: '1',
      title: 'title'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('getArticleDetailsError', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })

  test('getArticleDetailsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })
})

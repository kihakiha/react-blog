import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './ArticleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById';

const data = {
  id: '1',
  title: 'Article',
  subtitle: 'Article description',
  views: 20000,
  createdAt: '21.02.2032',
  img: '',
  tags: [],
  blocks: [],
}

describe('ArticleDetailsSlice.test', () => {
  test('test update profile service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending('', ''),
    )).toEqual(
      {
        isLoading: true
      }
    )
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(data, '', ''),
    )).toEqual(
      {
        data,
        isLoading: false,
      }
    )
  })
})

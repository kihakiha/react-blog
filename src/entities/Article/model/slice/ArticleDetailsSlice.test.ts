import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './ArticleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById';

const data = {
  id: '1',
  title: 'Article',
  subtitle: 'Article description',
  views: 20000,
  createdAt: '21.02.2032',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://1.gravatar.com/avatar/e0f1457ef1f29763dadf2209713283597f0ab4082ff99870b5d2f69d8f723326?size=256'
  },
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

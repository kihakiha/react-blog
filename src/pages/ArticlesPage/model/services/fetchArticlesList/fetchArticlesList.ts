import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ETags, IArticle } from 'entities/Article';
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageTag
} from '../../selectors/articlesPageSelectors/articlesPageSelectors';

interface IFetchArticlesList {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesList, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, { extra, rejectWithValue, getState }) => {
    const limit = getArticlesPageLimit(getState())
    const page = getArticlesPageNum(getState())

    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const tag = getArticlesPageTag(getState())

    try {
      addQueryParams({
        sort,
        order,
        search,
        tag
      })
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          tags: tag === ETags.ALL ? undefined : tag,
          q: search
        }
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data
    } catch (error) {
      return rejectWithValue('Произошла непредвиденная ошибка')
    }
  }
)

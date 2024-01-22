import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { EArticleSortField, ETags } from '@/entities/Article';
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, { getState, dispatch }) => {
    const _inited = getArticlesPageInited(getState())
    if (!_inited) {
      const orderFormUrl = searchParams.get('order') as SortOrder
      const sortFormUrl = searchParams.get('sort') as EArticleSortField
      const searchFormUrl = searchParams.get('search')
      const tagFormUrl = searchParams.get('tag') as ETags

      if (orderFormUrl) {
        dispatch(articlesPageActions.setOrder(orderFormUrl))
      }
      if (sortFormUrl) {
        dispatch(articlesPageActions.setSort(sortFormUrl))
      }
      if (searchFormUrl) {
        dispatch(articlesPageActions.setSearch(searchFormUrl))
      }
      if (tagFormUrl) {
        dispatch(articlesPageActions.setTag(tagFormUrl))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)

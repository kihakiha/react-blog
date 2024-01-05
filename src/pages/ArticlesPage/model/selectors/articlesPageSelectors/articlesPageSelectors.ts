import { StateSchema } from 'app/providers/StoreProvider';
import { EArticleViewType } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageViewType = (state: StateSchema) => state.articlesPage?.viewType || EArticleViewType.CELLS

import { IUser } from 'entities/User';

export enum ETags {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  JAVASCRIPT = 'JavaScript',
  PYTHON = 'Python',
  RUBY = 'Ruby',
  IOS = 'iOS',
  ANDROID = 'Android',
  DESIGN = 'Design',
}

export enum EArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export enum EArticleViewType {
  LIST = 'LIST',
  CELLS = 'CELLS',
}

export enum EArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export interface IArticleBlockBase {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: EArticleBlockType.CODE;
  code: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: EArticleBlockType.IMAGE;
  src: string;
  title?: string;
}

export type IArticleBlock = IArticleCodeBlock | IArticleTextBlock | IArticleImageBlock;

export interface IArticle {
  id: string
  title: string
  user: IUser,
  subtitle: string
  img: string
  views: number
  createdAt: string
  tags: ETags[]
  blocks: IArticleBlock[]
}

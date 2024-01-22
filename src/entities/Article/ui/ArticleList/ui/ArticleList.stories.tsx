import React from 'react'

import { Meta, StoryObj } from '@storybook/react';

import avatarImg from '@/shared/assets/tests/storybookAvatar.jpg'
import { EArticleViewType, IArticle } from '../../../model/types/article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
};

const articleMock = {
  id: '1',
  title: 'Javascript news СВЕЖАЯ',
  subtitle: 'Что нового в JS за 2022 год?',
  img: avatarImg,
  views: 1022,
  user: {
    id: '1',
    username: 'admin',
    avatar: avatarImg,
  },
  createdAt: '26.04.2022',
  userId: '1',
  tags: [
    'IT',
    'SCIENCE',
    'ECONOMICS',
    'APP',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
  ]
} as IArticle

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const CELLS: Story = {
  args: {
    isLoading: false,
    articles: new Array(16).fill(0).map((item, index) => (
      {
        ...articleMock,
        id: String(index)
      }
    )),
    viewType: EArticleViewType.CELLS
  },
}

export const LIST: Story = {
  args: {
    isLoading: false,
    articles: new Array(4).fill(0).map((item, index) => (
      {
        ...articleMock,
        id: String(index)
      }
    )),
    viewType: EArticleViewType.LIST
  },
}

export const Loading_CELLS: Story = {
  args: {
    isLoading: true,
    articles: [],
    viewType: EArticleViewType.CELLS
  },
}
export const Loading_LIST: Story = {
  args: {
    isLoading: true,
    articles: [],
    viewType: EArticleViewType.LIST
  },
}

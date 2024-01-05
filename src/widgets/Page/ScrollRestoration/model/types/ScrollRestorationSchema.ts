export type ScrollSchema = Record<string, number>; // <Page url, scroll position>

export interface ScrollRestorationSchema {
  scroll: ScrollSchema;
}

import { cn } from 'shared/libs/classNames/classNames';

describe('classNames', () => {
  test('without params', () => {
    expect(cn('', {}, [])).toBe('');
  });

  test('with only first param', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass additionalClass1 additionalClass2';
    expect(cn('someClass', {}, ['additionalClass1', 'additionalClass2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'hovered scrollable';
    expect(cn('', { hovered: true, scrollable: true })).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'hovered';
    expect(cn('', { hovered: true, scrollable: false })).toBe(expected);
  });

  test('with all three params', () => {
    const expected = 'someClass hovered scrollable additionalClass';
    expect(cn('someClass', { hovered: true, scrollable: true }, ['additionalClass'])).toBe(expected);
  });
});

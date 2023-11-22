type TMods = Record<string, boolean | string>;

export function cn(cls: string, mods: TMods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key]) => key),
  ].join(' ');
}

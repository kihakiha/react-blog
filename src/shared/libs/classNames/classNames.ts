type TMods = Record<string, boolean | string>;

export function cn(cls: string, mods: TMods = {}, additional: string[] = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key),
    ...additional.filter(Boolean),
  ].join(' ').trim();
}

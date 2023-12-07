import type { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/StoryBook/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/StoryBook/ThemeDecorator';
import { EnumTheme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/StoryBook/StyleDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(EnumTheme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;

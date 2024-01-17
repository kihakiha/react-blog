import path from 'path';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { IBuildOptions } from '../types/config';

interface IBabelLoaderProps extends IBuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isTsx }: IBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx
            }
          ],
          [
            '@babel/plugin-transform-runtime',
          ],
          // isTsx && [
          //   babelRemovePropsPlugin,
          //   {
          //     props: ['data-testid'],
          //   },
          // ]
          // .filter(Boolean)
        ]
      }
    }
  };
}

import type webpack from 'webpack'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { type IBuildOptions } from './types/config'

export function buildLoaders (options: IBuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const babelLoader = {
    test: /\.(js|ts|tsx|jsx)$/,
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
          ]
        ]
      }
    }
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = buildCssLoaders(isDev);

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader]
}

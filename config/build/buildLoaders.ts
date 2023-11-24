import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
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

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader]
}

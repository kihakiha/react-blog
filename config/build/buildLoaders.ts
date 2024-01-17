import type webpack from 'webpack'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { type IBuildOptions } from './types/config'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: IBuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const codeTsxBabelLoader = buildBabelLoader({ ...options, isTsx: true })

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

  // const typeScriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // }

  const cssLoader = buildCssLoaders(isDev);

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    codeTsxBabelLoader,
    // typeScriptLoader,
    cssLoader
  ]
}

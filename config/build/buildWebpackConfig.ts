import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type IBuildOptions } from './types/config'

export function buildWebpackConfig (options: IBuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options)
  }
}

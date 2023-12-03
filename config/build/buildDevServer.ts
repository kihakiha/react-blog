import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type IBuildOptions } from './types/config';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port || 8080,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
}

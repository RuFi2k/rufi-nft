/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import dotenv from 'dotenv';
import { BuildOptions } from 'esbuild';
import { BuildCleaner, HTMLPlugin } from './build/plugins';

dotenv.config();

/**
 * Available modes for now:
 * - dev
 * - prod
 */
export const isProd = process.env.MODE === 'prod';
export const isDev = process.env.MODE === 'dev';

const ROOT_DIR = [__dirname, '..'];

export const baseConfig: BuildOptions = {
  outdir: path.resolve(...ROOT_DIR, 'build'),
  entryPoints: [path.resolve(...ROOT_DIR, 'src', 'index.tsx')],
  entryNames: 'bundle.[hash]',
  bundle: true,
  tsconfig: path.resolve(...ROOT_DIR, 'tsconfig.json'),
  minify: isProd,
  sourcemap: isDev,
  metafile: true,
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.jpg': 'file',
  },
  plugins: [
    BuildCleaner,
    HTMLPlugin({
      title: 'RuFi NFT',
    }),
  ],
  watch: isDev && {
    onRebuild(err) {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      // eslint-disable-next-line no-console
      console.log('Rebuilding application...');
    },
  },
};

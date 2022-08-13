/* eslint-disable import/no-extraneous-dependencies */
import env from 'dotenv';
import ESBuild from 'esbuild';
import express from 'express';
import path from 'path';
import { baseConfig } from '../base-config';

env.config();

const port = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on http://localhost:${port}`);
});

ESBuild.build({
  ...baseConfig,
}).then(() => {
  // eslint-disable-next-line no-console
  console.log('Successfully built application.');
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
});

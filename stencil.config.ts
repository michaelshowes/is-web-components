import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'is-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  devServer: {
    openBrowser: false,
  },
  extras: {
    enableImportInjection: true,
  },
  plugins: [tailwind(), tailwindHMR(), sass()],
};

import {defineConfig} from "umi";

export default defineConfig({
  mfsu: false,
  routes: [
    {path: "/", component: "index"},
    {path: "/docs", component: "docs"},
  ],
  npmClient: 'pnpm',
  publicPath: '/MWIviewer/',
  history: {type: 'hash'}
});

import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'en',
  title: 'React Native Gesture Image Viewer',
  icon: '/logo.png',
  logo: '/logo.png',
  logoText: 'React Native Gesture Image Viewer',
  ssg: {
    experimentalWorker: true,
  },
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: true,
    shiki: {
      transformers: [transformerNotationDiff(), transformerNotationHighlight()],
    },
  },
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/saseungmin/react-native-gesture-image-viewer',
      },
      {
        icon: {
          svg: `
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
              <path fill="currentColor" d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/>
            </svg>
          `,
        },
        mode: 'link',
        content: 'https://www.npmjs.com/package/react-native-gesture-image-viewer',
      },
    ],
    locales: [
      {
        lang: 'en',
        label: 'English',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/saseungmin/react-native-gesture-image-viewer/tree/main/packages/document/docs',
          text: '📝 Edit this page on GitHub',
        },
      },
      {
        lang: 'ko',
        label: '한국어',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/saseungmin/react-native-gesture-image-viewer/tree/main/packages/document/docs',
          text: '📝 GitHub에서 이 페이지 편집하기',
        },
      },
    ],
  },
});

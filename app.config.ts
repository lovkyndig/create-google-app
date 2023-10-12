import type { DefineComponent } from 'vue'
// the alternative to Nuxt theme https://nuxt-themes.netlify.app/
// removed bloginote in the root and move all other to the root and add site as parent obj
export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer',
    menuBtn1: 'Google'
  },
  copyFiles: {
    content: 'wrong/content',
    public: 'wrong/public'
  },
  meta: {
    url: 'https://create-google-app.vercel.app/'
  },
  site: {
    author: 'Kyrie Eleison',
    email: 'jur.eleison@gmail.com',
    avatar: '/avatar.svg',
    favicon: '/avatar.svg', // favicon.ico
    scrollSmooth: true,
  },
  homePage: {
    showBlogPosts: true,
    postItemLimit: 20
  },
  privacyPage: true,
  articlePage: {
    showTime: true,
    outdated: {
      show: true,
      threshold: 30
    },
    showCatalog: false,
  },
  search: {
    exclude: [
      '/',
      '/about/',
      '/privacy/',
      '/list/'
    ]
  },
  assetTypes: []
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}

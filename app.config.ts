import pkg from './package.json'

export default defineAppConfig({
  myLayer: {
    meta: {
      name: 'Create Goocle App',
      description: pkg.description,
      url: pkg.homepage
    },
    author: pkg.author,
    email: 'jur.eleison@gmail.com',
    avatar: '/img/svg/avatar.svg',
    favicon: '/favicon.svg',
    privacy: {
      title: 'Privacy Policy following because this is an Google App.',
      description: 'The Privacy Policy, Sitemap and Rss for "Create Google App". Privacy Policy is requrid for all Google Apps.',
      notification: 'Privacy police is normally not recuried, but because this app is published on Google Play - Google need it.'
    },
    assetTypes: [],
    giscus: {
      repo: 'lovkyndig/create-google-app',
      repoId: 'R_kgDOKfRikA',
      category: 'Comments',
      categoryId: 'DIC_kwDOKfRikM4Capmi',
      mapping: 'url',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'noborder_dark',
      lang: 'en'
    },
    scrollSmooth: true,
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
      showCatalog: true
    },
    search: {
      exclude: [
        '/',
        '/about/',
        '/privacy/',
        '/list/'
      ]
    }
  }
})
/*
ahrefs LENGTH guide:
Title: 50-60
Descriptionn 110-130
*/

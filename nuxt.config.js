export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Easy Share',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Easily generate Facebook, Twitter, LinkedIn and Email share links'
      }
    ],
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Merriweather|Montserrat:900|Ubuntu+Mono&display=swap'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/global.scss',
    '~/assets/styles/_vars.scss'
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['easy-social-share-links'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

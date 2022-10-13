export default {
  target: 'server',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },

  components: true,

  buildModules: [
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
  ],

  modules: ['@nuxtjs/axios'],

  build: {},
}

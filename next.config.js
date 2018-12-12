const withSass = require('@zeit/next-sass')

const PREFIX = process.env.NODE_ENV === 'production' ? '/material-next-template' : ''

module.exports = withSass({
  assetPrefix: PREFIX,
  publicRuntimeConfig: {
    HOME_ROUTE: PREFIX,
  },
})
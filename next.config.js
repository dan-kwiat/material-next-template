const withSass = require('@zeit/next-sass')

module.exports = withSass({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/material-next-template' : '',
})
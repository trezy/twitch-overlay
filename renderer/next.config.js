const withSass = require('@zeit/next-sass')

const {
  TWITCH_API_CLIENT_ID,
  TWITCH_API_URL,
  TWITCH_USER_ID,
} = process.env





module.exports = withSass({
  publicRuntimeConfig: {
    apis: {
      twitch: {
        clientID: TWITCH_API_CLIENT_ID,
        url: TWITCH_API_URL,
        userID: TWITCH_USER_ID,
      },
    },
  },

  webpack (config) {
    config.target = 'electron-renderer'

    return config
  },

  exportPathMap () {
    return {
      '/start': { page: '/start' }
    }
  }
})

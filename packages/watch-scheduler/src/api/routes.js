module.exports = (server, opts, next) => {
  // const { scheduler } = opts

  server.get('/', async () => {
    return { iam: '/api' }
  })

  next()
}

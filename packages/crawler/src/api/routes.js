module.exports = (server, opts, next) => {
  server.get('/', async () => {
    return { message: 'hello world', iam: '/api' }
  })

  next()
}

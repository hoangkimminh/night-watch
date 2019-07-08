const Bull = require('bull')
const fastify = require('fastify')
const apiRoutes = require('./api/routes')

const loggerLevel = process.env.NODE_ENV !== 'production' ? 'debug' : 'info'
const server = fastify({ ignoreTrailingSlash: true, logger: { level: loggerLevel } })
const scheduler = new Bull('watch-scheduler')

server.register(apiRoutes, { prefix: '/api', scheduler })

server.get('/', async () => {
  return { iam: '/' }
})

const start = async () => {
  try {
    await server.listen(process.env.PORT || 3001, '::') // listen to all IPv6 and IPv4 addresses
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()

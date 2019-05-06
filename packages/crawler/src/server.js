const fastify = require('fastify')
const apiRoutes = require('./api/routes')
const Scheduler = require('./scheduler')

const server = fastify({ ignoreTrailingSlash: true, logger: true })
const scheduler = new Scheduler()

server.register(apiRoutes, { prefix: '/api', scheduler })

server.get('/', async () => {
  return { iam: '/' }
})

const start = async () => {
  try {
    Promise.all([
      server.listen(process.env.PORT || 3000, '::'), // listen to all IPv6 and IPv4 addresses
      scheduler.start()
    ])
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()

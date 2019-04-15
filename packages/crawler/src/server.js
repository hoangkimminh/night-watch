const fastify = require('fastify')({ ignoreTrailingSlash: true, logger: true })

const Scheduler = require('./scheduler')

fastify.get('/', async () => {
  return { message: 'hello world' }
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT, '::') // listen to all IPv6 and IPv4 addresses

    const scheduler = new Scheduler()
    scheduler.start()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()

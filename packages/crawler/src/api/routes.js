const { UrlEntity } = require('@albert-team/spiderman/entities')
const Scraper = require('../scraper')
const DataProcessor = require('../data-processor')

module.exports = (server, opts, next) => {
  const { scheduler } = opts

  server.get('/', async () => {
    return { iam: '/api' }
  })

  // run a watch
  server.post('/', async (req) => {
    const { url, cssSelector } = req.body
    const urlEntity = new UrlEntity(url, new Scraper(cssSelector), new DataProcessor())
    await scheduler.scheduleUrlEntity(urlEntity)

    return { success: true }
  })

  next()
}

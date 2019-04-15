const { Scheduler: SpidermanScheduler } = require('@albert-team/spiderman')

const Scraper = require('./scraper')

module.exports = class Scheduler extends SpidermanScheduler {
  constructor() {
    super()
  }

  classifyUrl() {
    return { scraper: new Scraper() }
  }
}

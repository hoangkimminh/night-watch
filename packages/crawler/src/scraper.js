const { Scraper: SpidermanScraper } = require('@albert-team/spiderman')

module.exports = class Scraper extends SpidermanScraper {
  constructor() {
    super()
  }

  async parse() {
    return { data: {}, nextUrls: [] }
  }
}

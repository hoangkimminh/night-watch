const { Scraper: SpidermanScraper } = require('@albert-team/spiderman')

module.exports = class Scraper extends SpidermanScraper {
  constructor(cssSelector) {
    super()
    this.cssSelector = cssSelector
  }

  parse() {
    return { data: {}, nextUrls: [] }
  }
}

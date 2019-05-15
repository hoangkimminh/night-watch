const { Scraper: SpidermanScraper } = require('@albert-team/spiderman')
const { JSDOM } = require('jsdom')

module.exports = class Scraper extends SpidermanScraper {
  constructor(cssSelectors) {
    super()
    this.cssSelectors = cssSelectors
  }

  parse(html) {
    const dom = new JSDOM(html)
    const { document } = dom.window
    const data = {}
    for (const css of Object.keys(this.cssSelectors)) {
      // only care about text content for the time being
      data[css] = document.querySelector(css).textContent.trim()
    }
    return { data, nextUrls: [] }
  }
}

const { Scheduler: SpidermanScheduler } = require('@albert-team/spiderman')

module.exports = class Scheduler extends SpidermanScheduler {
  constructor() {
    super()
  }

  /**
   * Do nothing. This won't be used
   */
  classifyUrl() {}
}

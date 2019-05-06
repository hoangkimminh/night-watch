const { DataProcessor: SpidermanDataProcessor } = require('@albert-team/spiderman')

module.exports = class DataProcessor extends SpidermanDataProcessor {
  constructor() {
    super()
  }

  process() {
    return { success: true }
  }
}

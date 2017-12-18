const locations = require('./location')

module.exports = (app) => {
  app.use('/locations', locations)
}
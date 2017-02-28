module.exports.Manager = require('./lib/Manager').default
module.exports.TransformerAbstract = require('./lib/TransformerAbstract').default

module.exports.Resource = {}
module.exports.Resource.Item = require('./lib/Resource/Item').default
module.exports.Resource.Collection = require('./lib/Resource/Collection').default

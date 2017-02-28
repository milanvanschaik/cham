import Collection from './Resource/Collection'

export default class Manager {
	constructor() {
		//
	}

	createData(resource) {
		if (resource instanceof Collection) {
			return resource.data.map((item) => {
				return Object.assign(resource.transformer.transform(item), this.getRelationships(resource, item))
			})
		}

		return Object.assign(resource.transformer.transform(resource.data), this.getRelationships(resource, resource.data))
	}

  getRelationships(resource, item) {
    if (resource.transformer.includes && resource.transformer.includes.length > 0) {
      var relationships = {}

      resource.transformer.includes.map((includeName) => {
        var FormattedName = includeName.substr(0, 1).toUpperCase() + includeName.substr(1)
        relationships[`${includeName}`] = this.createData(resource.transformer[`include${FormattedName}`](item))
      })

      return relationships;
    }
  }
}

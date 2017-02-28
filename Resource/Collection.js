import ResourceAbstract from './ResourceAbstract'

export default class Collection extends ResourceAbstract {
	constructor(data, transformer) {
		super()
		
		this.data = data
		this.transformer = transformer
	}
}
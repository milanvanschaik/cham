import ResourceAbstract from './ResourceAbstract'

export default class Item extends ResourceAbstract {
	constructor(data, transformer) {
		super()
		
		this.data = data
		this.transformer = transformer
	}
}
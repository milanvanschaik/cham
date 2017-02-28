import Item from './Resource/Item'
import Collection from './Resource/Collection'

export default class TransformerAbstract {
	constructor() {
		//
	}

  item(data, transformer) {
    return new Item(data, transformer);
  }

  collection(data, transformer) {
    return new Collection(data, transformer);
  }
}

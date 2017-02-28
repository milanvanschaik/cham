# cham
cham is a presentation and transformation layer for complex REST APIs build in JS. It's inspirated by [Fractal](https://github.com/thephpleague/fractal).

## Installation
Via NPM:
```
npm i --save cham
```

Via Yarn:
```
yarn add cham
```

## Usage
### Creating transformers
```javascript
import { TransformerAbstract } from 'cham'
import CommentTransformer from './CommentTransformer'

export default class UserTransformer extends TransformerAbstract {
  includes = [
    'comments',
  ]

  transform(object) {
    return {
      name: object.name,
      fullName: `${object.name} ${object.lastName}`
    }
  }

  includeComments(object) {
    return this.collection(object.comments, new CommentTransformer);
  }
}
```

### Transform
```javascript
import { Manager, Resource } from 'cham'
import UserTransformer from './Transformers/UserTransformer'

var manager = new Manager()

var users = new Resource.Collection(usersFromDB, new UserTransformer)

// Transformed users ready for API output
manager.createData(users)
```

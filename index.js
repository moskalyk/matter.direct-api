const EventEmitter = require('events').EventEmitter
const util = require('util');

let reedMixin = { 
	direct() { 
		self = this
		return { reed: { 
			pull(deck) {
					return function(compute){
						self.emit('card', {compute: compute, deck: deck})
						return true
					}
				}
			}
		}
	}
}


class Matter extends EventEmitter {
	constructo(){
		EventEmitter.call(this);
	}
}

// console.log(Matter)
// console.log(reedMixin)
Object.assign(Matter.prototype, EventEmitter.prototype)
Object.assign(Matter.prototype, reedMixin)

// export default Matter
module.exports = Matter
/**
 * Event manager JS
 */

export default class {
	constructor() {
		this.bus = new Vue();
	}
	
	emit(event, ...args) {
		this.bus.$emit(event, ...args);
	}
	
	on(event, callback) {
		this.bus.$on(event, callback);
	}
}
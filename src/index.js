import Handler from "./module/VueEvent";

console.log('initialising vue event');
const VueEvent = {
	install: function (Vue) {
		let eventHandler = new Handler();
		Vue.prototype.$fire = function (event, ...params) {
			eventHandler.emit(event, ...params);
		};
		Vue.prototype.$listen = function (event, ...params) {
			eventHandler.on(event, ...params);
		}
	}
};

export default VueEvent;

if (window.Vue) {
	window.Vue.use(VueEvent)
}

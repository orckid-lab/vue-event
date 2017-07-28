import Handler from "./module/VueEvent";

const VueEvent = {
	install: function (Vue) {
		let eventHandler = new Handler();
		Vue.prototype.$bus = {
			emit: function (event, ...params) {
				eventHandler.emit(event, ...params);
			},
			on: function (event, ...params) {
				eventHandler.on(event, ...params);
			}
		};
	}
};

export default VueEvent;

if (window.Vue) {
	window.Vue.use(VueEvent)
}

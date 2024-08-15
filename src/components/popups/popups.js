class Popups {
	constructor() {
		this.init();
	}

	init() {
		this.container = document.querySelector('[data-popups]');

		if (!this.container) {
			return;
		}

		console.log(this.container);
	}
}

export default new Popups();

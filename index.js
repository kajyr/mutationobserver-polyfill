if (window.MutationObserver != null) { return; }

class MutationObserver {

	constructor(callBack) {
		this.callBack = callBack;
	}

	observe(element, options) {
		this.element = element;
		return this.interval = setInterval(() => {
				
			const html = this.element.innerHTML;

			if (html !== this.oldHtml) {
				this.oldHtml = html;
				return this.callBack.apply(null);
			}
		}

		, 200);
	}
	
	disconnect() {
		return clearInterval(this.interval);
	}
}


window.MutationObserver = MutationObserver;
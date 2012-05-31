/*
---

script: SimpleMooTicker.js

name: SimpleMooTicker

description: A simple ticker written within the MooTools framework

license: MIT-style license

authors:
  - Thomas Kunambi
  - kunambi

requires:
  - Core/Class
  - Core/Object
  - Core/Element

provides: [SimpleMooTicker]

...
*/

var SimpleMooTicker = new Class({
	Implements: Options,
	options: {
		autostart: true,
		animation: "scroll",
		step: 5,
		periodical: 100
	},
	initialize: function(options) {
		this.setOptions(options);
		this.container = document.id(this.options.container);
		if (this.container === null) {
			throw("DOM object not found");
		}
		this.timer = null;
		this.container.addEvents({
			"mouseover": function() { this.stop(); }.bind(this),
			"mouseout": function() { this.start(); }.bind(this)
		});
		if (this.options.animation == "fade") {
			this.container.addClass(this.options.animation);
			this.container.getElement("ul").setStyle("height", this.container.getElement("ul > li").getSize().y);
		}
		this.oLI = this.container.getElement("ul li:first-child");
		if (this.options.autostart) {
			this.start();
		}
	},
	animate: function() {
		switch(this.options.animation) {
			case "fade":
				new Fx.Tween(this.oLI, {
					onComplete: function() {
						this.oLI.getParent("ul").adopt(this.oLI.clone());
						this.oLI.dispose();
						this.oLI = this.container.getElement("ul li:first-child");
						new Fx.Tween(this.oLI).start("opacity", 1);
					}.bind(this)
				}).start("opacity", 0);
			break;
			default:
				if (this.oLI.getCoordinates().width <= Math.abs(this.oLI.getStyle("margin-left").toInt())) {
					this.oLI.getParent("ul").adopt(new Element("li", {"html": this.oLI.get("html")}));
					this.oLI.dispose();
					this.oLI = this.container.getElement("ul li:first-child");
				}
				this.oLI.setStyle("margin-left", this.oLI.getStyle("margin-left").toInt() - this.options.step);
			break;
		}
	},
	start: function() {
		this.timer = this.animate.periodical(this.options.periodical, this);
	},
	stop: function() {
		$clear(this.timer);
	}
});

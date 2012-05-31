Style Select
============

A simple ticker written within the MooTools framework


How to use
----------

Javascript snippet to initialize the class:

	window.addEvent("domready", function() {
		var T = new SimpleMooTicker({
			container: document.id("wrapper"),
			step: 5,
			periodical: 100
		});
	});


HTML snippet:

	<div id="wrapper">
		<ul>
			<li>First ticker message <a href="#">and a link</a></li>
			<li>Second ticker message <a href="#">and a link</a></li>
			<li>Third ticker message <a href="#">and a link</a></li>
			<li>Fourth ticker message <a href="#">and a link</a></li>
			<li>Fifth ticker message <a href="#">and a link</a></li>
		</ul>
	</div>

Options
-----------------

	container: (string||object) reference to div dom element container | required
	autostart: (boolean) wether the scrolling of the ticker should autostart or not | default: true
	animation: (string) wether the ticker text should "scroll" or "fade" | default: "scroll"
	steps: (integer) how many pixels to the left should the ticker take each iteration when "animation: scroll" is chosen | default: 5 pixels
	duration: (integer) amount of miliseconds between each iteration | default 100 miliseconds
		NB! the duration should NOT be lower than 1000 when chosing "animation: fade"


Methods
-----------------

The following methods are availible publicly:

	animate(): perform the desired animation between each ticker message
	start(): starts animating the ticker
	stop(): halts animating the ticker


Notes
-----------------

Version 1

    * Ready for release

const dedline = new Date( Date.parse( new Date() ) + 300000 );


let items = localStorage.getItem("data");


if(!items) {
	localStorage.setItem("data", dedline);
	items = localStorage.getItem("data");
}
let d = new Date(items);
let firstCalculation = true;
let w_mon = d.getMonth() + 1;
let $countdown = $('.ce-countdown');







$countdown.countEverest({
	day: d.getDate(),
	month: w_mon,
	year: d.getFullYear(),
	hour: d.getHours(),
	minute: d.getMinutes(),
	leftHandZeros: true,
	afterCalculation: function() {
		var plugin = this,
			units = {
				days: this.days,
				hours: this.hours,
				minutes: this.minutes,
				seconds: this.seconds
			},
			// max values per unit
			maxValues = {
				hours: '23',
				minutes: '59',
				seconds: '59'
			},
			actClass = 'active',
			befClass = 'before';

		// build necessary elements
		if (firstCalculation == true) {
			firstCalculation = false;

			// build necessary markup
			$countdown.find('.ce-unit-wrap div').each(function () {
				var $this = $(this),
					className = $this.attr('class'),
					value = units[className],
					sub = '',
					dig = '';

				// build markup per unit digit
				for(var x = 0; x < 10; x++) {
					sub += [
						'<div class="digits-inner">',
							'<div class="flip-wrap">',
								'<div class="up">',
									'<div class="shadow"></div>',
									'<div class="inn">' + x + '</div>',
								'</div>',
								'<div class="down">',
									'<div class="shadow"></div>',
									'<div class="inn">' + x + '</div>',
								'</div>',
							'</div>',
						'</div>'
					].join('');
				}

				// build markup for number
				for (var i = 0; i < value.length; i++) {
					dig += '<div class="digits">' + sub + '</div>';
				}
				$this.append(dig);
			});
		}

		// iterate through units
		$.each(units, function(unit) {
			var digitCount = $countdown.find('.' + unit + ' .digits').length,
				maxValueUnit = maxValues[unit],
				maxValueDigit,
				value = plugin.strPad(this, digitCount, '0');

			// iterate through digits of an unit
			for (var i = value.length - 1; i >= 0; i--) {
				var $digitsWrap = $countdown.find('.' + unit + ' .digits:eq(' + (i) + ')'),
					$digits = $digitsWrap.find('div.digits-inner');

				// use defined max value for digit or simply 9
				if (maxValueUnit) {
					maxValueDigit = (maxValueUnit[i] == 0) ? 9 : maxValueUnit[i];
				} else {
					maxValueDigit = 9;
				}

				// which numbers get the active and before class
				var activeIndex = parseInt(value[i]),
					beforeIndex = (activeIndex == maxValueDigit) ? 0 : activeIndex + 1;

				// check if value change is needed
				if ($digits.eq(beforeIndex).hasClass(actClass)) {
					$digits.parent().addClass('play');
				}

				// remove all classes
				$digits
					.removeClass(actClass)
					.removeClass(befClass);

				// set classes
				$digits.eq(activeIndex).addClass(actClass);
				$digits.eq(beforeIndex).addClass(befClass);
			}
		});
	}
});

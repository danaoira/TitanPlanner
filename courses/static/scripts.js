// Name: Dana Toribio
// Date: 4/15/14
// Filename: scripts.js
// Description: This is the scripts.js file which holds all the
// 		JavaScript/jQuery code to help with assisting in formatting
// 		TitanPlanner in areas that CSS cannot sufficiently format.

$(document).ready(function() {
	// formats the height of index.html's iframes to fill the window
	var calendarHeight = $(window).height() - $('#header').outerHeight();
	var contentHeight = $(window).height() - $('#logo').outerHeight();
	var timeslotWidth = ($('.time-slot').outerWidth() - 2);
	var hourslotWidth = ($('.hour-slot').outerWidth() - 2);
	$('#calendar').css('height', calendarHeight);
	$('#content').css('height', contentHeight);
	$('#left-page').css('height', $(window).height());
	$('#right-page').css('height', $(window).height());
	$('.blank').css('width', hourslotWidth);
	$('.week-day').css('width', timeslotWidth);
});

function createCourseDiv(course_days, start_time, end_time, course_subject, course_number, course_title, course_id) {
	var course_days = course_days;
	var course_id = course_id;
	var start_time = start_time;
	var start_hour = parseInt(start_time.substring(0, 2));
	var start_min = parseInt(start_time.substring(2, 4));
	var start_AMPM = start_time.substring(4, 6);

	var end_time = end_time;
	var end_hour = end_time.substring(0, 2);
	var end_min = end_time.substring(2, 4);
	var end_AMPM = start_time.substring(4, 6);

	var time_elapsed = parseInt(end_time.substring(0, 4)) - parseInt(start_time.substring(0, 4));
	var time_diff = time_elapsed > 60 ? time_elapsed - 40 : 55;

	var append_data = '<a href="/remove/' + course_id + '/"><div class="course-listing" style="top: ' + start_min + 'px; height: ' + time_diff + 'px">' + start_time + '-' + end_time + '<hr />CPSC ' + course_number + '<br/>' + course_title + '</a></div>';

// M, T, W, R, F, S, MW, TT, MWF, MTWTF
if (course_days == "Tu") {
	$('.T .' + start_hour + '.' + start_AMPM).append(append_data);
} else if (course_days == "Th") {
	$('.R .' + start_hour + '.' + start_AMPM).append(append_data);
} else if (course_days == "MW") {
	$('.M .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.W .' + start_hour + '.' + start_AMPM).append(append_data);
} else if (course_days == "TT") {
	$('.T .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.R .' + start_hour + '.' + start_AMPM).append(append_data);
} else if (course_days == "MWF") {
	$('.M .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.W .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.F .' + start_hour + '.' + start_AMPM).append(append_data);
} else if (course_days == "MTWTF") {
	$('.M .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.T .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.W .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.R .' + start_hour + '.' + start_AMPM).append(append_data);
	$('.F .' + start_hour + '.' + start_AMPM).append(append_data);
} else {
	$('.' + course_days + ' .' + start_hour + '.' + start_AMPM).append(append_data);
}
};

// function iframeResize() {
// 	description: resizes iframe heights to span the entire height of
// 		the window
// 	triggers: document.ready/onPageLoad, onWindowResize
// }

// function weekdayResize() {
// 	description: resizes the width of the weekday slots
// 	calculation: (window.width() - 45px) / 7
// 	selectors affected: ".week-day"
// }

// function calendarSlotResize() {
// 	description: resizes the width of the calendar slots
// 	calculation: (window.width() - 45px) / 7
// 	selectors affected: ".hour-slot"
// }

// function calendarResize() {
// 	description: resizes the height of the calendar to span the
// 		entire height of the window
// 	calculation: (window).height() = 100%
// 	triggers: document.ready/onPageLoad, onWindowResize
// }
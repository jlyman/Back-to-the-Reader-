/*
 * -- Back to the Reader! Google Chrome Extension --
 * -- Written by Joshua Lyman, www.joshualyman.com --
 *      (Licensed under modified BSD license.)
 *
 * Just a quick and dirty way to get my Google Reader link back into the main
 * links bar at the top of Google App pages after Photos somehow replaced it.
 *
*/

if ($('meta[name*="application-name"]').attr("content") != "Google Reader") {
	var linksBar = $('#gbar a.gb3');
	var cssClasses = linksBar.prev($('a')).attr('class');
	var readerLink = $('#gbi a[href*="reader"]').attr('href');
	linksBar.before('<a target="_blank" href="' + readerLink + '" class="' + cssClasses + '">Reader</a>');
}
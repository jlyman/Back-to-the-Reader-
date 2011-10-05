/*
 * -- Back to the Reader! Google Chrome Extension --
 * -- Written by Joshua Lyman, www.joshualyman.com --
 *      (Licensed under modified BSD license.)
 *
 * Just a quick and dirty way to get my Google Reader link back into the main
 * links bar at the top of Google App pages after Photos somehow replaced it.
 *
*/

function addReaderLink() {
	var found = false;
	
	// Find all elements with class 'gbzt' and look for a "*reader*" link
	$('a.gbzt').each(function(index) { if ($(this).attr('href').match('/reader/') != null) found = true; });
	
	// If not, then let's insert that element
	if (!found) {
		// Find the correct reader link (should be in the submenu) and copy the whole tag
		var ratag = $("a.gbmt:contains('Reader')")[0];
		var readerText = $(ratag).text();
		
		// Change the class on the copied <a> tag and insert the correct Reader label (for internationalization)
		$(ratag).removeClass('gbmt').addClass('gbzt').html('<span class="gbtb2"></span><span class="gbts">' + readerText + '</span></span>');
		
		// Find the li.gbto element, insert a copied <li><a> tag right before that element
		$('#gbz li.gbt').last().before('<li class="gbt newlink"></li>');
		$('.newlink').append(ratag);
	}
	
	// Somehow, Google is refreshing the toolbar. Set itself to periodically recheck and re-add if necessary.
	setTimeout("addReaderLink()", 180000);
}

addReaderLink();
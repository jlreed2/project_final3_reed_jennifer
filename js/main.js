$( document ).ready( function( ) {

	//Custom jQuery:
	var dish;
	var day = new Date().getDay();

	if ( day === 0 ) {
	    dish = 'Leaky House Soup';
	} else if ( day == 1 ) {
	    dish = 'Game Pie';
	} else if ( day == 2 ) {
		dish = 'Roast Hog';
	} else if ( day == 4 ) {
		dish = 'Eccles Cake';
	} else if ( day == 6 ) {
		dish = 'Bangers and Mash';
	} else {
	    dish = 'Gamp\'s Old Gregarious';
	}
	$( '#deal' ).append( ' ' + dish ) ;

	 //Backstretch plugin:
	$.backstretch( './img/brick_and_plaster_texture.png' );

	//Blueberry plugin:
	$( '.blueberry' ).blueberry( );
} );

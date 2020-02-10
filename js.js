$( function() {
    $( "#xt-price-range" ).slider({
      range: true,
      min: 0,
      max: 250,
      values: [ 0, 250 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#xt-price-range" ).slider( "values", 0 ) +
      " - $" + $( "#xt-price-range" ).slider( "values", 1 ) );
});
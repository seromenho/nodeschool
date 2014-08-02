var http = require( "http" ),
    args = process.argv.slice(2),
    mimicAsync = [],
    result = [],
    j = 0;
 
args.forEach( function( url, index ) {
  http.get( url, function( response ) {
    var stream = "";
 
    response.setEncoding( "utf8" );
    response.on( "data", function( data ) {
      stream += data;
    });
 
    response.on( "end", function() {
      result[index] = stream;
      if( args.length === j+1 ) {
        result.forEach( function( data ) {
          console.log( data );
        });
      }
      j++;
    });
  });
});
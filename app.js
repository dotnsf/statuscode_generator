//. app.js
var express = require( 'express' ),
    app = express();

app.use( express.static( __dirname + '/public' ) );

app.get( '/status', function( req, res ){
  var code = 200;
  if( req.query.code ){
    var _code = req.query.code;
    try{
      code = parseInt( _code );
    }catch( e ){
    }
  }

  var ts = ( new Date() ).getTime();
  var reference_url = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status';

  var allow_cors = process.env.ALLOW_CORS || false;
  if( allow_cors ){
    res.set( 'Access-Control-Allow-Origin', allow_cors );
  }

  res.contentType( 'application/json; charset=utf-8' );
  res.status( code );
  res.write( JSON.stringify( { code: code, reference_url: reference_url, timestamp: ts }, null, 2 ) );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );



GLOBAL = {
	fingerprint: function( ){
		return localStorage.getItem('VOD_U');
	},
	setFingerPrint: function( callback ){
		new Fingerprint2({}).get(function(result){
			localStorage.setItem('VOD_U', result );
			callback( result );
		});
	},
	//incase user has manually removed the fingerprint
	//recreate it again in the client
	onFingerprint:function( callback ){
		var key = this.fingerprint();
		if( key )
			callback( key );
		else{
			this.setFingerPrint( callback );
		}
	}
}
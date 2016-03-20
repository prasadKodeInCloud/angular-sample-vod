
module.exports = {

	nodeServer:{
		host:'localhost',
		port:3000
	},	
	
	dbLocal: {
		mongo: {
			url: 'localhost:27017',
			database: 'vod'
		}
	},

	dbProduction: {
		mongo: {
			url: 'sa:1qaz2wsx@ds039860.mongolab.com:39860/vod',
			database: 'vod'
		}
	},
	logger: {
		api: 'logs/api.log',
		exception: 'logs/exceptions.log'
	}
};

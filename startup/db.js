const mongoose = require('mongoose');

module.exports = () => {
	const dbConnectionUrl = 'mongodb://localhost:27017/hio';
	
	const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
  
  // mongoose.set('debug', true);

  mongoose.connect(dbConnectionUrl, options)
  .then(()=> console.log(`connected to mongodb`))
  .catch(err=> console.log(`Mongo Error: ${err}`));

}
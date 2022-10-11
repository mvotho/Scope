const mongoose = require('mongoose')

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        const connectDB = async () => {
            try {
              await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
          
              console.log("Successfully connected to mongodb database");
          
              return mongoose.connection;
            } catch (err) {
              console.log("Could not connect to mongodb database" + err);
            }
          };

        connectDB();
		console.log(`Ready!`);
	},
};
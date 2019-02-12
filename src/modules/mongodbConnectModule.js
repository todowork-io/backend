import mongoose from 'mongoose';

module.exports.connect = () => {
  mongoose.connect(`mongodb://localhost:27017/todoworkio`, {
      useNewUrlParser: true
    },
    (err) => {
      if (err) {
        return console.log(err);
      }

      console.log(`Mongodb: We are connected to the database(todoworkio)`);

      return mongoose.connection;
    });
};

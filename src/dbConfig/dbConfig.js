import mongoose from 'mongoose';

async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB is connected successfully');
    });

    connection.on('error', (error) => {
      console.log('MongoDB is not connected');
      console.log('Error: ' + error);
      process.exit();
    });
  } catch (error) {
    console.log('MongoDB not runnning =>', error);
  }
}

export default connect;

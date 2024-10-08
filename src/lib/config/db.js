import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://bob:bob@cluster0.swoa4je.mongodb.net/mern';

export const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      // Déjà connecté
      console.log('Already connected to MongoDB');
      return;
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://bob:bob@cluster0.swoa4je.mongodb.net/mern';

export const ConnectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      // Déjà connecté
      console.log('Already connected to MongoDB');
      return;
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
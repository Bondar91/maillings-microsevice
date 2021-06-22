import { connect } from 'mongoose';

const connectWithMongoDb = async (): Promise<void> => {
  const connectUri: string = `mongodb+srv://krystian91:pr4KQCtzqKbh0rNT@dbmongo.nfrm9.mongodb.net/maillings?retryWrites=true&w=majority`;

  try {
    await connect(connectUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('connectWithMongoDb', error);
  }
};

export default connectWithMongoDb;

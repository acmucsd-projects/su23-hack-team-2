const { MongoClient } = require('mongodb');
const algoliasearch = require('algoliasearch');
const client = algoliasearch('BF6BAXRV38', '9ab225dfafbf63a1619c25d83a7518f0');
const index = client.initIndex('tritontrade'); // Use the correct index name

// MongoDB connection URL
const mongoURL = 'mongodb+srv://admin:OdkcOcmJEF8gnKHH@tritontrade.zqmdr2q.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB connection URL

// Function to extract and format data from MongoDB
async function extractDataAndIndex() {
  try {
    // Connect to MongoDB
    const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Specify the MongoDB collection you want to extract data from
    const collection = client.db().collection('TritonTrade'); // Update with your collection name

    // Fetch data from MongoDB
    const cursor = collection.find({}); // You can specify a query if needed

    // Transform MongoDB documents into Algolia records
    const algoliaRecords = await cursor.map((document) => ({
      objectID: document._id.toString(), // Ensure a unique objectID
      title: document.title,
      description: document.description,
      // Add other fields as needed
    })).toArray();

    // Push data to Algolia
    const { objectIDs } = await algoliaIndex.saveObjects(algoliaRecords);

    console.log(`Indexed ${objectIDs.length} records to Algolia`);
  } catch (error) {
    console.error('Error extracting data from MongoDB and indexing to Algolia:', error);
  } finally {
    // Close the MongoDB connection
    client.close();
  }
}

// Call the extraction and indexing function
extractDataAndIndex();

{/*
// Data extraction from MongoDB (replace with your own logic)
const dataToIndex = [
  { objectID: '1', title: 'Product 1', description: 'Description 1' },
  { objectID: '2', title: 'Product 2', description: 'Description 2' },
  // Add more records as needed
];
*/}

// Push data to Algolia
index.saveObjects(dataToIndex, { autoGenerateObjectIDIfNotExist: true })
  .then(({ objectIDs }) => {
    console.log(`Indexed ${objectIDs.length} records to Algolia`);
  })
  .catch((err) => {
    console.error('Error indexing data to Algolia:', err);
  });

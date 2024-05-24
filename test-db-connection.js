const { sequelize } = require('./models'); // Import the Sequelize instance

async function testDatabaseConnection() {
  try {
    // Test the connection by querying a table
    const projects = await sequelize.models.Project.findAll();

    // If the query succeeds, log a success message
    console.log('Successfully connected to the database');
    console.log('Projects:', projects);
  } catch (error) {
    // If an error occurs, log the error message
    console.error('Error connecting to the database:', error);
  }
}

// Call the function to test the database connection
testDatabaseConnection();

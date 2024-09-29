const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create a new Sequelize instance and configure the connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Disable logging of SQL queries (optional)
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connections in pool
    acquire: 30000, // The maximum time (in ms) that pool will try to get connection before throwing error
    idle: 10000, // The maximum time (in ms) that a connection can be idle before being released
  },
  dialectOptions: {
    ssl:
      process.env.NODE_ENV === "production"
        ? {
            // If running in production, ensure SSL is used
            require: true,
            rejectUnauthorized: false, // You may need this for self-signed certificates
          }
        : false,
  },
});

// Function to test the connection
const testConnection = async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log("Connection to PostgreSQL has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Call the connection test function
testConnection();

// Export the sequelize instance for use in models and other files
module.exports = sequelize;

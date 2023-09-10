const db = require('../config/connection');
const dbWipe = require('./db-wipe');
const User = require('../models/User');

const userData = require('./userData.json');

db.once('open', async () => {
    await dbWipe('User', 'users');
  
    await User.insertMany(userData);
  
    console.log('Users have been seeded');
    
    process.exit(0);
  });
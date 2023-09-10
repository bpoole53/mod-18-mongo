const db = require('../config/connection');
const dbWipe = require('./db-wipe');
const User = require('../models/User');
const Thought = require('../models/Thought');

const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');

db.once('open', async () => {
    await dbWipe('User', 'users');
    // await dbWipe('Thought', 'thoughts');
  
    await User.insertMany(userData);
    console.log('Users have been seeded');
    
    await Thought.insertMany(thoughtData);  
    console.log('Thoughts have been seeded');
    
    process.exit(0);
  });
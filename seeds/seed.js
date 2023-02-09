const sequelize = require('../config/connection');
const  Nissan  = require('../models/Nissan');

const nissanData = require('./zData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: false});
const Nissans = await Nissan.bulkCreate(nissanData)
  
}

seedDatabase()
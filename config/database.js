const mongoose = require('mongoose')

const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/billingApp"

const setupDB = () => {
    mongoose.connect(CONNECTION_URI, {
    })
        .then(() => {
            console.log('connected to db')
        })
        .catch(err => {
            console.log('db connection error', err)
        })
}

module.exports = setupDB
//@ts-nocheck
import mongoose from "mongoose"
import * as config from "../../config/environments.json"

const databaseUrl = config.default.default.database

const startMongo = async () => {

  await mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

}

const stopMongo = async () => {
  await mongoose.disconnect()
}

export {
  startMongo,
  stopMongo
}
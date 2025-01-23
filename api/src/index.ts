import { Elysia }         from "elysia"
import { userController } from "./user/user_controller"

import mongoose from 'mongoose'
const user = process.env.MONGO_INITDB_ROOT_USERNAME
const pass = process.env.MONGO_INITDB_ROOT_PASSWORD
const port = process.env.MONGO_PORT || '27017'
const host = process.env.MONGO_HOST
console.log( `>>>mongodb://${ user }:${ pass }@${ host }/?authSource=admin` )
await mongoose.connect( `mongodb://${ user }:${ pass }@${ host }/?authSource=admin` )

const app = new Elysia().get( "/", () => "Hello Elysia" )
                        .use( userController )
                        .listen( 3000 )
console.log(
  `🦊 Elysia is running at ${ app.server?.hostname }:${ app.server?.port }`
)

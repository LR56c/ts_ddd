import { userService } from "./user_service"
import { userRequest } from "./user_model"
import Elysia from "elysia"

export const userController = new Elysia( { prefix: "/user" } )
  .use( userService )
  .post( "/", async ( { body, createUser, error } ) => {
      try {
        await createUser( body )
        return {
          result : "success"
        }
      }
      catch ( e ) {
        return error( 400 )
      }
    }, {
      body: userRequest
    }
  )

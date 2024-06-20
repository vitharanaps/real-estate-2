
import { z } from "zod"

export const signUpValidaitionSchema = z.object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string().email({
        message:"Please Enter valied Email !"
    }),
    password : z.string().min(3,{
        message: "Pasword must be at least 3 charactes"
    }).max(8,{message: "Password must be maximum 8 characters only"})
  })
   
  export const signInValidaitionSchema = z.object({

    email: z.string().email({
        message:"Please Enter valied Email !"
    }),
    password : z.string().min(3,{
        message: "Pasword must be at least 3 charactes"
    }).max(8,{message: "Password must be maximum 8 characters only"})
  })
   
import type {Request, Response, NextFunction} from 'express'

export const pleaseAuth = (
    req:Request<{},unknown,{},{password?:string}>,
     res:Response<{message:string}>,
      next:NextFunction) =>
        {
            const {password} = req.query
            if(password === "please"){
                next()
            }else{
                res.status(400).json({message:"please input password"})
            }

        }
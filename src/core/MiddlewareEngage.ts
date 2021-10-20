import { Express } from 'express'
import { Common } from '../middleware/Common'
import { ErrorHandling } from '../middleware/ErrorHandling'

export class MiddlewareEngage{

    public static async InitializeCommon(app :Express){
        let middleware = new Common(app)

        await middleware.useBodyParser()
        await middleware.useURLencoded()
        await middleware.useCors()
    }

    public static async InitializeErrorHandling(app :Express){
        let errorMiddleware = new ErrorHandling(app)

        await errorMiddleware.handle404Error()
    }
}
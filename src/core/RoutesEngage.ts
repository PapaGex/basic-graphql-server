import { Express } from 'express'
import { HelloWorldRouteController } from '../routes/helloWorld'
import { AbstractController } from '../routes/AbstractController'

export class RoutesEngage {
    public static async Initialize(app: Express, link: string) {
        let routes = await this.getRoutes(link)
        routes.forEach(rc => {
            app.use("/", rc.router)
        })
    }
    public static async getRoutes(link: string): Promise<Array<AbstractController>> {
        let routes: Array<AbstractController> = []
        routes.push(new HelloWorldRouteController(link))
        return Promise.resolve(routes)
    }
}
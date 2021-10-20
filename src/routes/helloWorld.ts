import { AbstractController } from "./AbstractController";
import {Response,Request} from 'express'
import { HelloWorld } from "../services/HelloWorld";
import { StatusStatics } from "../static/StatusStatics";

export class HelloWorldRouteController extends AbstractController {

    constructor(link:string){
        super();
        this.path = '/';
        this.InitializeController(link);
    }

    public async runService(req: Request, resp: Response):Promise<any>{

        let response = await HelloWorld.wishHello()
        resp.status(StatusStatics.code200).send(response)

    }
}
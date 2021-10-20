import { Express } from 'express'
import { Response, Request } from 'express'
import {StatusStatics} from '../static/StatusStatics'

export class ErrorHandling {

    app: Express

    constructor(_app: Express) {
        this.app = _app
    }

    public async handle404Error() {
        this.app.use((req: Request, resp: Response) => {
            resp.status(StatusStatics.code404).send(StatusStatics.code404message)
        })
    }

}
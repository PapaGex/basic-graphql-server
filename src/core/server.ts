const express = require ('express')

import {Express} from 'express'
import { MiddlewareEngage } from './MiddlewareEngage';
import { RoutesEngage } from './RoutesEngage';

import * as ServerConfig from '../../build/configs/serverConfig.json'

export async function server() {

    let app :Express= express();

    let host = ServerConfig.host
    let port = ServerConfig.port

    let link = "http://" +host+ ":" + port.toString()

    await MiddlewareEngage.InitializeCommon(app)
    await RoutesEngage.Initialize(app,link)
    await MiddlewareEngage.InitializeErrorHandling(app)

    app.listen(port, host, () => {
        console.log(
            `Server  started listening at ${host} on ${port} port.`
        )
    })


}
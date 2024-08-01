import { Request, Response, NextFunction } from "express";
import le from "../config/logEngine";
import { LogEngine } from "whiskey-log";

export default async function handleRequest(req:Request, res:Response, next:NextFunction) {
    le.logStack.push("handleRequest")
    
    try {

        // ignore websocket GETs for now ..
        if(req.url!=="/ws") {
            let msg = req.method + " " + req.url + ": " + JSON.stringify((req.method==="POST" ? req.body : req.query))
            le.AddLogEntry(LogEngine.EntryType.Info, msg)
        }
        
    } catch(err:any) {
        le.AddLogEntry(LogEngine.EntryType.Error, err)
        throw new Error(err)
    } finally {
        le.logStack.pop()
        next()
    }
}
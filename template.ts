// import { Request, Response, NextFunction } from "express";
// import le from "../config/logEngine";
// import { LogEngine, LogEntryType } from "whiskey-log";

// export default async function handleRequest(req:Request, res:Response, next:NextFunction) {
//     le.logStack.push("handleRequest")
    
//     try {

//         // ignore websocket GETs for now ..
//         if(req.url!=="/ws") {
//             let msg = req.method + " " + req.url + ": " + JSON.stringify((req.method==="POST" ? req.body : req.query))
//             le.AddLogEntry(LogEntryType.Info, msg)
//         }
        
//     } catch(err:any) {
//         le.AddLogEntry(LogEntryType.Error, err.message || 'unknown error')
//         throw new Error(err)
//     } finally {
//         le.logStack.pop()
//         next()
//     }
// }
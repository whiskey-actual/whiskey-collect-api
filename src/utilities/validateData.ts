import { LogEngine, LogEntryType } from "whiskey-log";
import config from "../config";

export default function validateData(mandatoryFields:string[], data:any):{isValid:boolean,message:string} {
    config.le.logStack.push("validateData")

    let result = {isValid:false, message:"payload not parsed."}
    
    try {
        
        let missingFields:string[] = []

        for(const f of mandatoryFields) {
            if(!data[f] || data[f]===0) {
                missingFields.push(f)
            }
        }

        if(missingFields.length>0) {
            config.le.AddLogEntry(LogEntryType.Warning, ".. missing mandatory fields: [" + missingFields.join(",") + "]")
        } else {
            result = {isValid:true, message:"payload validation passed."}
        }

    } catch(err:any) {
        config.le.AddLogEntry(LogEntryType.Error, err)
        throw new Error(err)
    } finally {
        config.le.logStack.pop()
    }

    return result

}
import CollectorAPI from '../src/index'

let c = new CollectorAPI("localhost", "postgres", "postgres", "example")
c.initDb()
c.addActiveDirectoryDeviceData({})

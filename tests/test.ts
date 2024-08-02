import CollectorAPI from '../src/index'

let c = new CollectorAPI("localhost", "postgres", "postgres", "example", true)
c.createDb().then(() => {
    c.addActiveDirectoryDeviceData({})
})


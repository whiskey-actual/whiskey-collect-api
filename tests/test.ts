import CollectorAPI from '../src/index'


async function main() {
    await doShit()
}

async function doShit() {
    let c = new CollectorAPI()
    await c.initdb("localhost", "example", "postgres", "example", true)
    await c.addActiveDirectoryDeviceData({})    
}

main()
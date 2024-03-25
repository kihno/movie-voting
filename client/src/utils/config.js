import { createClient } from '@rocketgraphql/rocketgraph-js-sdk'

const config = {
    baseURL: 'https://backend-C0ELK0Q.rocketgraph.app/auth'
}

const { auth } = createClient(config)

export { auth }
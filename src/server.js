import express from 'express'
import cors from 'cors'
import gqlMiddleware from 'express-graphql'
import resolvers from './graphql/resolvers'
import { schema } from './graphql/schema'

const app = express()
// const isDev = process.env.NODE_ENV !== 'production'

// definiendo el esquema

app.use(cors())

app.use(
  '/graphql',
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

export const server = port => {
  app.listen(port || 4000, () =>
    console.log('Now browse to localhost:4000/graphql')
  )
}

export default server

import { queries as Query } from './queries'
import {
  GraphQLDate as Date,
  GraphQLTime as Time,
  GraphQLDateTime as DateTime
} from 'graphql-iso-date'

export const resolvers = {
  Date,
  Time,
  DateTime,
  Query
}

export default resolvers

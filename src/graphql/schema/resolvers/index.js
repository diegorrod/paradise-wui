import { queries as Query } from './queries'
import { Habitacion } from '../types/habitacion'
import { Tarifas } from '../types/tarifas'
import {
  GraphQLDate as Date,
  GraphQLTime as Time,
  GraphQLDateTime as DateTime
} from 'graphql-iso-date'

export const resolvers = {
  Date,
  Time,
  DateTime,
  Query,
  Habitacion,
  Tarifas
}

export default resolvers

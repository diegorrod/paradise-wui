import { makeExecutableSchema } from 'graphql-tools'
// Scalars
import Base from './scalars/base'
// Types
import { CatHabType } from './types/cathab'
import { HabitacionType } from './types/habitacion'
import { MonedasType } from './types/monedas'
import { TarifasType } from './types/tarifas'
import TipHab from './types/tiphab'
import { resolvers } from './resolvers'
// Query
import Query from './queries/queries'

export const schema = makeExecutableSchema({
  typeDefs: `
    ${Base}
    ${CatHabType}
    ${HabitacionType}
    ${MonedasType}
    ${TarifasType}
    ${TipHab}
    ${Query}
  `,
  resolvers
})
export default schema

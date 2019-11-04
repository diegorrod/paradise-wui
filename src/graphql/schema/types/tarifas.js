import { paradise } from '../database'

export const TarifasType = `
type Tarifas {
  PlaCod: String!
  PlaNom: String
  PlaMeMaSi: String
  PlaCobro: String
  PlaObserv: String
  PlaImpTip: Float
  PlaTipo: String
  PlaTipCobro: Int
  ArtId: Int
  PlaMoneda: Monedas
}
`

export const Tarifas = {
  PlaMoneda: async ({ PlaMoneda }) => {
    const result = await paradise.getOne({
      table: 'MONEDAS',
      where: [{ key: 'MonId', op: '=', value: PlaMoneda }]
    })
    return result
  }
}

export default {
  TarifasType
}

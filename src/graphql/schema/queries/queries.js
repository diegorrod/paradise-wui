export default `
type Query {
  habitacion(HabNum: Int): Habitacion,
  habitaciones: [Habitacion],
  monedasList: [Monedas],
  monedasGet(id: Int!): Monedas
}`

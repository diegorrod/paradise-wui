import { paradise } from '../../database'
const monedasList = async () => {
  const result = await paradise.get({ table: 'MONEDAS' })
  return result
}
const monedasGet = async (_, { id }) => {
  const result = await paradise.getOne({
    table: 'MONEDAS',
    where: [{ key: 'MonId', op: '=', value: id }]
  })
  return result
}

export default {
  monedasList,
  monedasGet
}

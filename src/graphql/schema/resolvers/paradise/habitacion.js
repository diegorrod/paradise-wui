import { paradise } from '../../database'

async function habitacion(_, { HabNum }) {
  console.log(_)
  const result = await paradise.getOne({
    table: 'HABITACION',
    where: [{ key: 'HabNum', op: '=', value: HabNum }]
  })
  return result
}
async function habitaciones() {
  const result = await paradise.get({ table: 'HABITACION' })
  return result
}

export default {
  habitacion,
  habitaciones
}

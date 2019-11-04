import { paradise } from '../../database'

async function HabitacionTipo(_, { TiphCod }) {
  const result = await paradise.getOne({
    table: 'TIPHAB',
    where: [{ key: 'TiphCod', op: '=', value: TiphCod }]
  })
  return result
}

export default {
  HabitacionTipo
}

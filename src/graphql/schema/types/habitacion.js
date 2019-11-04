import { paradise } from '../database'

export const HabitacionType = `
type Habitacion {
  HabNum: Int!,
  HabNom: String,
  HabTipo: TipHab,
  HabObs: String,
  HabPiso: Int,
  HabCamMat: Int,
  HabCamSin: Int,
  HabCat: CatHab,
  HabIntTel: String,
  HabTarifa: Tarifas,
  HabNoDisp: Int,
  HabNoDpNombre: String,
  HabEstado: String,
  HabLinea: Int,
  HabSector: Int,
  HabEnLimpiezaUsuId: String,
  HabEnLimpiezaFecha: DateTime,
  HabUltimaLimpiezaHora: String,
  HabEnLimpiezaHora: String,
  HabUltimaLimpiezaFecha: DateTime,
  HabEnLimpezaCtrlFrigobar: String,
  HabBloqueadaDesde: DateTime,
  HabBloqueadaHasta: DateTime,
  HabBloqueadaObs: String,
  HabProximaEntrada: DateTime,
  HabProximaSalida: DateTime,
  HabProximaReserva: String,
  HabProximaEntradaHora: String,
  HabOcupada: String
}`

export const Habitacion = {
  HabTipo: async ({ HabTipo }) => {
    const result = await paradise.getOne({
      table: 'TIPHAB',
      where: [{ key: 'TiphCod', op: '=', value: `'${HabTipo}'` }]
    })
    return result
  },
  HabCat: async ({ HabCat }) => {
    const result = await paradise.getOne({
      table: 'CATHAB',
      where: [{ key: 'CatHCod', op: '=', value: `'${HabCat}'` }]
    })
    return result
  },
  HabTarifa: async ({ HabTarifa }) => {
    const result = await paradise.getOne({
      table: 'TARIFAS',
      where: [{ key: 'PlaCod', op: '=', value: `'${HabTarifa}'` }]
    })
    return result
  }
}

export default {
  Habitacion,
  HabitacionType
}

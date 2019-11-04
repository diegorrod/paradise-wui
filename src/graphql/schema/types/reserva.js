import { paradise } from '../database'

export const ReservaType = `
type Reserva {
  ResNro: Int	Unchecked
  ResUsuIng: String
  ResHab: Int
  ResFecIng: DateTime
  ResHorIng: DateTime
  ResMaqIng: String
  ResUsuMod: String
  ResPaxTit: Int
  ResMaqMod: String
  ResFecMod: DateTime
  ResHorMod: DateTime
  ResUsuCan: String
  ResFecCan: DateTime
  ResHorCan: DateTime
  ResMaqCan: String
  ResQuien: String
  ResSerObs: Int
  ResPago: String
  ResTel: String
  ResFax: String
  ResResPor: String
  ResFecEnt: DateTime
  ResFecSal: DateTime
  ResEsta: DateTime
  ResProced: String
  RHConLin: Int
  ResPlan: String
  ResConSen: Int
  ResConfirm: String
  ResFecConf: DateTime
  ResHorConf: DateTime
  ResMotCan: String
  ResPorDto: Int
  DescId: Int
  ResEmpPaga: Int
  ResDestino: String
  ResConRoo: Int
  ResTarifCar: String
  ResMonFact: Int
  ResCamMat: Int
  ResCamSin: Int
  ResCamCun: Int
  ResHoraEntrada: DateTime
  ResGruId: DateTime
  AgeViaId: Int
  ResCambioDatAgencia: String
  ResPagaHospedaje: Int
  ResFecEntHor: DateTime
  ResMucLinObs: Int
  ResMail: String
  ResHabiaSenia: String
  ResHisHabNumAnt: Int
  ResHisTarIdAnt: String
  ResHisTarMonIdAnt: Int
  ResHisTarImporteAnt: Float
  ResConfPorMail: String
  ResEMailId: Int
  ResDesAplicableA: String
  ResCantPax: Int
  TipOcuId: Int
  ResFichaDeIngreso: String
  ResMotivoAlojamiento: String
  ResLateCheckOut: String
  ResDesayunos: Int
  ResVoucherAgencia: String
  ResCanFacIdNoShow: Int
  ResCanNoShow: String
  ResSeniaUtilizada: Float
  ResAutoMatricula: String
  ResAutoColor: String
  ResAutoModelo: String
  ResAutoMarca: String
  ResFechaConfirmacionMovible: String
  ResFechaConfirmacion: DateTime
  ResMaqVer: String
  ResUsuVer: String
  ResHorVer: DateTime
  ResFecVer: DateTime
  ResVerificada: String
}`

export const ReservasQueryDef = {

}

export const ReservasQuery = {
  
}


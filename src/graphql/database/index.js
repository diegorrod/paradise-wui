import sql from 'mssql'

const PARADISE_CONFIG = {
  user: 'sa',
  password: '123456',
  server: 'server01',
  database: 'Paradise'
}

let paradiseDB

export const paradise = {}

async function query({ table, where }) {
  let query = `select * from ${table}`
  if (where) {
    let queryWhere = ' where'
    where.map(item => {
      if (item.key && item.op && item.value) {
        queryWhere += ` ${item.key} ${item.op} ${item.value}`
      } else if (item.op) {
        queryWhere += ` ${item.op}`
      }
    })
    query += queryWhere
  }
  const result = await (await paradise.request()).query(query)
  return result
}

paradise.request = async () => {
  if (paradiseDB) return paradiseDB
  try {
    const db = await sql.connect(PARADISE_CONFIG)
    paradiseDB = db.request()
    return paradiseDB
  } catch (error) {
    console.log(error)
  }
}

paradise.get = async q => {
  try {
    const result = await query(q)

    if (result.recordset.lenght === 0) return []

    const data = []

    result.recordset.forEach(record => {
      const recordData = {}

      Object.entries(record).forEach(element => {
        if (typeof element[1] === 'string') {
          element[1] = element[1].trim().toLowerCase()
        }
        recordData[element[0]] = element[1]
      })

      data.push(recordData)
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

paradise.getOne = async q => {
  try {
    const result = await query(q)

    if (result.recordset.lenght === 0) return undefined

    const data = {}

    Object.entries(result.recordset[0]).forEach(element => {
      if (typeof element[1] === 'string') {
        element[1] = element[1].trim().toLowerCase()
      }
      data[element[0]] = element[1]
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export default {
  paradise
}

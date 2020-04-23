const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "sql101.epizy.com",
    database: "epiz_25576696_test",
    user: "epiz_25576696",
    password: "vwSmrfaCjPw04Tx"
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}
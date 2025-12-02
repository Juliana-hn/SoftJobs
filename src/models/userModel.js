import pool from '../../database/config.js'
import bcrypt from 'bcryptjs'

export const createUserModel = async (id, email, password, rol, lenguage) => {
  const hashedPassword = bcrypt.hashSync(password)
  const SQLquery = {
    text: 'INSERT INTO usuarios (id, email, password, rol, lenguage) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, rol',
    values: [id, email, hashedPassword, rol, lenguage]
  }
  const response = await pool.query(SQLquery)
  return response.rows[0]
}

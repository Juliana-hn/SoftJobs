import { findUserEmailModel } from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await findUserEmailModel(email)
    const isPasswordValid = bcrypt.compareSync(password, user.password)
    if (isPasswordValid) {
      res.status(401).json({ message: 'no autorizado' })
    }
    const token = jwt.sign({ email }, process.env.jwtSecret, {
      expiresIn: '120s'
    })
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error })
  }
}

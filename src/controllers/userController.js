import { createUserModel } from '../models/userModel.js'

export const registerUser = async (req, res) => {
  try {
    const { id, email, password, rol, lenguage } = req.body
    const user = await createUserModel(id, email, password, rol, lenguage)
    res.status(201).json({ message: 'usuario creado', user })
  } catch (error) {
    console.log(error)
  }
}

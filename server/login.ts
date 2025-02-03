'use server'

import bcrypt from 'bcryptjs'
import { db } from '@/server/db'
import { authenticate } from '@/server/auth' // Import session logic

export async function login(email: string, password: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    })

    if (!user) {
      console.log('No user')
      return { success: false, message: 'Invalid credentials' }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      console.log('Entered wrong pass')
      return { success: false, message: 'Invalid credentials' }
    }

    // after verifying with db, if default pass reset
    if (password === 'default') {
      return { success: false, message: 'Update password', email: email }
    }

    const userData = { id: user.id, email: email, name: user.name ? user.name : undefined }

    await authenticate(userData)

    return { success: true, message: 'Login successful', user: userData }
  } catch (error) {
    return { success: false, message: `An error occurred: ${error}` }
  }
}

export async function resetPass(email: string, newPassword: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    })

    if (!user) {
      console.log('No user')
      return { success: false, message: 'Invalid credentials' }
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await db.user.update({
      where: { email },
      data: { password: hashedPassword },
    })

    const userData = { id: user.id, email: email, name: user.name ? user.name : undefined }

    console.log('Password updated successfully')
    return { success: true, message: 'Password updated successfully', user: userData }
  } catch (error) {
    console.log('Error during password update:', error)
    return { success: false, message: `An error occurred: ${error}` }
  }
}

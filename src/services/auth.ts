import { getUserByEmail, getUserByUsername } from "../repositories/user";
import * as Bycript from 'bcrypt'

export async function verifyUser(email:string, password: string){
  try {
    const intendedUser = await getUserByEmail(email);
    if(!intendedUser){
      throw new Error('User not found');
    }

    const pwdValid = await Bycript.compare(password, intendedUser.password);

    if(!pwdValid){
      throw new Error("Invalid credentials");
      
    }

    return intendedUser;
  } catch (error) {
    throw error;
  }
}
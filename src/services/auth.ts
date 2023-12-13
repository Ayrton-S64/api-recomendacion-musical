import { getUserByEmail, getUserByUsername } from "../repositories/user";
import * as Bycript from 'bcrypt'

export async function verifyUser(email:string, password: string){
  console.log('verifying user');
  try {
    console.log('obtaining user');
    const intendedUser = await getUserByEmail(email);
    if(!intendedUser){
      throw new Error('User not found');
    }
    console.log('comparing password');
    const pwdValid = await Bycript.compare(password, intendedUser.password);

    if(!pwdValid){
      throw new Error("Invalid credentials");
      
    }
    console.log('sending response');
    return intendedUser;
  } catch (error) {
    throw error;
  }
}
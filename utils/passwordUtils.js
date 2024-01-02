import bcrypt from 'bcryptjs';

// to hasing the password while register
export const hassPassword = async(password)=>{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);
  return hashedPassword;
}

// to compare the password while login user 
export async function comparePassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}
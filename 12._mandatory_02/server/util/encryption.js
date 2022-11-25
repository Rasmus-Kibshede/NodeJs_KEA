import bcrypt from "bcrypt";

const saltRounds = 12;

// let the saltrounds be changeable
export async function passwordEncryption(password) {
    return await bcrypt.hash(password, saltRounds);
}

export async function passwordCompare(loginPassword, encrypedPassword) {
    return await bcrypt.compare(loginPassword, encrypedPassword);
}
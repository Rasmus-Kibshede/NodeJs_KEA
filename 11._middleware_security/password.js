import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "123";

const loginPassword = "hunter12";
const encrypedPassword = "$2b$12$8uH88l2xhVTjTsScI/v2Je3dEFwx4otMdZHhVhVaGR.Vyr27LyXeC";

const encrypedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds);
console.log(encrypedPasswordResult);

const passwordComparison = await bcrypt.compare(loginPassword, encrypedPassword);
console.log(passwordComparison);

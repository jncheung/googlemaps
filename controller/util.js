const generator = require('generate-password');
const bcrypt = require('bcrypt')

var passwords = generator.generate({
    length: 39,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols:false

});
// var passwords = generator.generateMultiple(3, {
//     length: 39,
//     uppercase: false,
//     lowercase: true,
//     numbers: true,
//     symbols:false

// });
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(15)
    const hash = await bcrypt.hash(password, salt)

    // const isSame = await bcrypt.compare(password2, hash)
    // console.log(isSame) // updated
    return hash
}

const syncPwd = async ()=>{ 
    console.log(passwords)
    var newPwd = await hashPassword(passwords);
    console.log(`Your hashed api key is ${newPwd}`)

}

L()
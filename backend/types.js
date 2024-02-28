const zod =  require('zod');

const createUser = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    email : zod.string().email(),
    password : zod.string().min(6),
})

const loginUser = zod.object({
    email : zod.string().email(),
    password : zod.string(),
})

const updateUser = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string().min(6),
})

module.exports = {
    createUser : createUser,
    updateUser: updateUser,
    loginUser : loginUser
}
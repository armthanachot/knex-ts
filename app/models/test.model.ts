import {conn} from "../../db/connection"
const findAll = async()=>{
    const result = await conn.select('id','name').from('users')
    return result
}

const findAllRaw = async()=>{
    const result = await conn.raw('SELECT * FROM users')
    return result
}

const findById = async(id)=>{
    const result = await conn.select('id','name').from('users').where('id',id)
    return result
}

const create = async(user)=>{
    const result = await conn('users').insert(user)
    return result
}

const update = async(id,user)=>{
    const result = await conn('users').where('id',id).update(user)
    return result
}

const destroy = async(id)=>{
    const result = await conn('users').where('id',id).del()
    return result
}
export {
    findAll,create,update,destroy,findAllRaw,findById
}
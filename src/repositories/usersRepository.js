const connection = require("../configs/database/connection/connection");

const usersRepository = {

    getById: async function ( id ) {
        return await connection
            .select('*')
            .from('categorias')
            .where('id', id)
            .first();
    },
}

module.exports = usersRepository;
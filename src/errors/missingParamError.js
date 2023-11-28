class MissingParamError extends Error {
    constructor(message) {
        super(message)
        this.name = 'MissingParamError'
    }
}


module.exports = MissingParamError
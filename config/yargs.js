const argv = require('yargs')
            .command('listar', 'Imprimir tabla de multiplicar en consola', {
                base: {
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    demand: true,
                    alias: 'l',
                    default: 10
                }
            })
            .command('crear', 'Crear archivo tabla de multiplicar', {
                base: {
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    demand: true,
                    alias: 'l',
                    default: 10
                }
            })
            .help()
            .argv

module.exports = {
    argv
}
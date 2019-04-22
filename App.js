const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    break;

    case 'listar':
        listartabla(argv.base, argv.limite);
    break;

    default:
        console.log('Comando no definido');
}


const fs = require('fs');
const colors = require('colors');

let listartabla = (base, limite) => {
    let data = '';
    
    console.log('================================='.green);
    console.log(`Tabla del ${base} limite ${limite}`.green);
    console.log('================================='.green);

    for(let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    
    }

    console.log(data);
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        let data = '';
    
        for(let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        
        }
        
        fs.writeFile(`files/tabla-${ base }.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
                //console.log('The file has been saved!');
        });

    });

};

module.exports = {
    crearArchivo,
    listartabla
};
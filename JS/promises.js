function getDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(datos); }, 2500)
    });
};

async function recibirDatos(){
    const D = await getDatos();
    console.log(D);
}

recibirDatos();
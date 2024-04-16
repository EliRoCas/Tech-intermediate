const dev = [
    {
        id: 1,
        name: "Dante",
        lastName: "Arias",
        languages: "php",
    },
    {
        id: 2,
        name: "Triz",
        lastName: "Rocas",
        languages: "Java y C#",
        languages2: ["Java", "C#"],
    },
    {
        id: 3,
        name: "Edwin",
        lastName: "Arias",
        languages: ".net",
    },
    {
        id: 4,
        name: "Eli",
        lastName: "Rocas",
        languages: "php",
    },

]

//MÉTODO SOME () -- Recorre el array y nos regresa un booleano si, como mínimo, uno de los 
// elementos presentes cumple con la condición; es decir, permite comprobar. 

// Estamos usando el array dev que se creó con anterioridad 
const songg = dev.some(post => post.id == 5);
console.log(songg);

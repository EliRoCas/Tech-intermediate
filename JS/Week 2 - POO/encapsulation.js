// Dentro de una clase en JS, se puede tener algo denominado "método estático",
// estos métodos permiten ser llamados sin instanciar la clase a la que pertenecen. 
// Adenás, no "pertenecen" a un objeto instanciado por la clase, sino a la clase en general, por 
// lo que permite ser llamado directamente. 
// Son habitualmente usados para crear funciones para una aaplicación. 

class Employee {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    static chargeAccount() { // Para asignar un método estático, se utiliza la palabra reservada "static" 
        console.log("Pasar la cuenta de cobro al llegar el día 3 de cada mes")
    }
}

class Teacher extends Employee {
    constructor(name, age, gender, assignmet) {
        super(name, age, gender);
        this.assignmet = assignmet;
        this.hours = null;
    }


    // PROPIEDADES GET Y SET -- OBJECT ACCESSORS OR COMPUTED PROPERTIES
    // Son construcciones habituales que permiten acceder a valores y propiedades, sin revelar la forma de
    // implementación de las clases. 
    // Permiten encapsular los objetos y evitar mantenimiento de las apps cuando la forma de 
    // implementar un objeto cambia. 
    // Ergo, permiten acceder a los datos de los objetos, para leerlos o asignar nuevos valores. 
    // GET recibe un valor 
    // SET asigna un valor 

    get getHours() {
        return this.hours;
    }

    set setHours(hours) {
        this.hours = hours;
    }
}

const firstEmployee = new Employee ("John", 34, "masculino"); 
console.log(firstEmployee); // Dentro del prototipo de firstEmployee no aparece el método estático 
// que se dfinió, sino que aparece por fuera

const spanishTeacher = new Teacher("Laura Ruiz", 35, "Femenino", "Lengua Castellana");
console.log(spanishTeacher);
console.log(spanishTeacher.getHours);
// console.log(spanishTeacher.setHours(45)); no se puede definir así, porque trabaja como 
// propiedad(parámetro) no como función.
spanishTeacher.setHours = 45; // Aquí lo estoy definiendo como una propiedad de una variable
console.log(spanishTeacher.getHours) // como el get es el que recibe, entonces se llama aquí



// Aquí se ejecuta el método estático de Employee
Employee.chargeAccount();
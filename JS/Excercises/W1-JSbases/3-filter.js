// Ejercicio 3 - FILTER 
const people = [
    { name: 'Dante', age: 3 },
    { name: 'Triz', age: 2 },
    { name: 'Edwin', age: 35 },
    { name: 'Eli', age: 30 },
    { name: 'Max', age: 1 }
];

// Filtrar las personas mayores de 29
const filteredPeople = people.filter(function (person) { // en esta constante se da la condición para el filter
    return person.age > 29;
});

console.log(filteredPeople);


// Ejercicio 4 - Sumar los salarios de las personas que ganan más de 2500000, usando filter y reduce 

const employees = [
    {
        nameE: "Dante",
        rol: "Administrador de empresas",
        salary: 3200000,
    },
    {
        nameE: "Triz",
        rol: "Gerente de marketing",
        salary: 4300000,
    },
    {
        nameE: "Max",
        rol: "Asesor comercial",
        salary: 2500000,
    },
    {
        nameE: "Zeus",
        rol: "Técnico de infraestructura",
        salary: 1800000,
    },
    {
        nameE: "Edwin",
        rol: "Lider de Arquitectura",
        salary: 7000000,
    },
    {
        nameE: "Eli",
        rol: "Desarrollador",
        salary: 3500000,
    }
];

// Filtrar empleados con salario mayor a 2500000
const highSalaryEmployees = employees.filter(employee => employee.salary > 2500000);

// Sumar los salarios de los empleados filtrados
const totalSalary = highSalaryEmployees.reduce((sum, employee) => sum + employee.salary, 0);
// Aquí el reduce nos permite sumar los valroes. Sus parámetros:
// "sum" funciona como acumulador, 
// employee es el objeto actual en el que va la iteración 
// employee.salary es el salario del empleado actual
// sum + employee.salary es la suma que se da y se va acumulando. 

console.log(`Total de salarios de empleados con salario mayor a 2500000: ${totalSalary}`);


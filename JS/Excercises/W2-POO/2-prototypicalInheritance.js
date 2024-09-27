// Con HERENCIA PROTOTÍPICA 
// Padre o SuperClase 
function Hiring1(rol, salary, experience, status) {
    this.rol = rol;
    this.salary = salary;
    this.experience = experience;
    this.status = status;
};

Hiring1.prototype.payment2 = function () {
    console.log("Puede acceder a su pago")
};

const vacant2 = new Hiring1("Auxiliar", 1500000, "6 months", "trainer");
console.log(vacant2.payment2());

//Hijos o SubClases 
// Función constructora 
function PermanetEmployee1(rol, salary, experience, status, socialSecurity, socialBenefits) {
    this.super = Hiring1;
    this.super(rol, salary, experience, status)
    this.socialSecurity = socialSecurity;
    this.socialBenefits = socialBenefits;
};

//herencia, se instancia una clase padre y luego se le dice al sistema que a esa clase, 
//le agregue las características propias del hijo.
PermanetEmployee1.prototype = new Hiring1;
PermanetEmployee1.prototype.constructor = PermanetEmployee1;

//Sobreescritura del método padre 
PermanetEmployee1.prototype.payment2 = function () {
    console.log("El pago de la vacante era de 2500000")
};

//Método propio del hijo 
PermanetEmployee1.prototype.holidays1 = function () {
    console.log("En diciembre tengo 15 días de vacaciones")
};


//Segundo hijo de Hiring
// Función constructora 
function ProvisionServicesEmployee1(rol, salary, experience, status, workHours) {
    this.super = Hiring1
    this.super(rol, salary, experience, status);
    this.workHours = workHours;
};
//Herencia - Segundo hijo
ProvisionServicesEmployee1.prototype = new Hiring1;
ProvisionServicesEmployee1.prototype.constructor = PermanetEmployee1;

//Sobreescritura del método padre
ProvisionServicesEmployee1.prototype.payment2 = function () {
    console.log("El pago global por este proyecto es de 12000000")
};

// Método propio del segundo hijo
ProvisionServicesEmployee1.prototype.write1 = function () {
    console.log("Este es el reporte del avance del proyecto")
};


const developer1 = new PermanetEmployee1(
    "Software developer", 3500000, "3 years", "junior", "ARL, EPS, Caja de Compensación", "Vacaciones pagas");

const freelance1 = new ProvisionServicesEmployee1(
    "Software developer", 5800000, "7 years", "senior", "Without Schedule");

console.log(developer1);
developer1.holidays1();
console.log(freelance1);
freelance1.write1();


// Ejercicio 8 - Herencia 

// Crear una clase que se llame contratación, definiendo atributos propios de ella, y llamar dos clases externas
// una será empleado fijo y otra empleado por prestación de servicios. En el método se incluirá la diferencia entre ambos 

class Hiring {
    constructor(rol, salary, experience, status) {
        this.rol = rol;
        this.salary = salary;
        this.experience = experience;
        this.status = status;
    }
    payment() {
        console.log("El pago será quincenal")
    }
}

const vacant = new Hiring("Auxiliar", 1500000, "6 months", "trainer");
console.log(vacant);
vacant.payment();

class PermanetEmployee extends Hiring {
    constructor(rol, salary, experience, status, socialSecurity, socialBenefits) {
        super(rol, salary, experience, status);
        this.socialSecurity = socialSecurity;
        this.socialBenefits = socialBenefits;
    }
    holidays() {
        console.log("En diciembre tengo 15 días de vacaciones")
    }
}

class ProvisionServicesEmployee extends Hiring {
    constructor(rol, salary, experience, status, workHours) {
        super(rol, salary, experience, status);
        this.workHours = workHours;
    }
    write() {
        console.log("Este es el reporte del avance del proyecto")
    }
}

const developer = new PermanetEmployee(
    "Software developer", 3500000, "3 years", "junior", "ARL, EPS, Caja de Compensación", "Vacaciones pagas");

const freelance = new ProvisionServicesEmployee(
    "Software developer", 5800000, "7 years", "senior", "Without Schedule"
)

console.log(developer);
developer.holidays();
console.log(freelance);
freelance.write();

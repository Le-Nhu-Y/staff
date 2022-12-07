class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string,
                email: string,
                age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }
}
let staff = new Staff("Le Nhu Y","lenhuy@gmail.com",35);

let nameStaff = staff.getName();
console.log(nameStaff); // Le Nhu Y

let emailStaff = staff.getEmail();
console.log(emailStaff); // lenhuy@gmail.com

let ageStaff = staff.getAge();
console.log(ageStaff); // 35

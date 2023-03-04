const user = {
    firstName: "Yadanar",
    middleName: "Yu Yu",
    lastName: "Aung",
    age: 20,
    city: "Yangon",
    phone: "09423782791",
    country: "Myanmar",
    skill: ["HTML", "CSS", "JS"],
}

class Person {
    constructor(x) {
        this.firstName = x.firstName;
        this.middleName = x.middleName;
        this.lastName = x.lastName;
        this.age = x.age;
        this.city = x.city;
        this.phone = x.phone;
        this.country = x.country;
        this.skill = x.skill;
    }

    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    get getFirstName() {
        return this.firstName;
    }

    set setMiddelName(middleName) {
        this.middleName = middleName;
    }

    get getMiddleName() {
        return this.middleName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    get getLastName() {
        return this.lastName;
    }

    fullName(firstName, middleName, lastName) {
        return `${this.getFirstName} ${this.getMiddleName} ${this.getLastName}`;
    }

    set setAge(age) {
        this.age = age;
    }

    get getAge() {
        return this.age;
    }

    set setCity(city) {
        this.city = city;
    }

    get getCity() {
        return this.city;
    }

    set setPhone(phone) {
        this.phone = phone;
    }

    get getPhone() {
        return this.phone;
    }

    set setCountry(country) {
        this.country = country;
    }

    get getCountry() {
        return this.country;
    }

    set setSkill(skill) {
        this.skill.push(skill);
    }

    get getSkill() {
        return this.skill;
    }
}

const me = new Person(user);

console.log(me.fullName());
console.log(me.getAge);
console.log(me.getCity);
console.log(me.getPhone);
console.log(me.getCountry);
console.log(me.getSkill);

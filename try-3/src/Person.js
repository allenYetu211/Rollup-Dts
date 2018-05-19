export default class Person {
    constructor (name, gender = 'man!') {
        this.name = name
        this.gender = gender
    }

    say() {
        console.log(`my name is ${this.name}, this is a ${this.gender}`)
    }
}

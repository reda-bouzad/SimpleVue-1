import data from "./data.js "
const persons = [...data];

function randomNumber() {
    const randomNumber = Math.floor(Math.random() * persons.length) + 1 ;
    return randomNumber;
}





const app = Vue.createApp({
    // template: '<h1> Hello {{firstName}} </h1>',
    // the data is a function that returns an object 
    data() {
        return {
            firstName : persons[0].firstName,
            lastName : persons[0].lastName,
            email : persons[0].email,
            gender : persons[0].gender,
            picture : persons[0].picture,
        }
            
        
    },
    methods: {

        randomNumber() {
            const randomNumber = Math.floor(Math.random() * persons.length)  ;
            const indexNumber = randomNumber;
            console.log(indexNumber)
            return randomNumber;
        },

        getUser() {
            const indexNumber = this.randomNumber();
            this.firstName = persons[indexNumber].firstName;
            this.lastName = persons[indexNumber].lastName;
            this.email = persons[indexNumber].email;
            this.gender = persons[indexNumber].gender;
            this.picture = persons[indexNumber].picture;
        }
        
    },
})

app.mount('#app')
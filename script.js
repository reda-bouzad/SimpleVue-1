import data from "./data.js ";
const persons = [...data];

const app = Vue.createApp({
  // template: '<h1> Hello {{firstName}} </h1>',
  // the data is a function that returns an object
  data() {
    return {
      firstName: persons[0].firstName,
      lastName: persons[0].lastName,
      email: persons[0].email,
      gender: persons[0].gender,
      picture: persons[0].picture,
    };
  },
  methods: {
    randomNumber() {
      const randomNumber = Math.floor(Math.random() * persons.length);
      return randomNumber;
    },

    /*
    getUserFromFile() {
      this.firstName = persons[this.randomNumber()].firstName;
      this.lastName = persons[this.randomNumber()].lastName;
      this.email = persons[this.randomNumber()].email;
      this.gender = persons[this.randomNumber()].gender;
      this.picture = persons[this.randomNumber()].picture;
    },
    */

    getUsersFromApi() {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
          this.firstName = data.results[0].name.first;
          this.lastName = data.results[0].name.last;
          this.email = data.results[0].email;
          this.gender = data.results[0].gender;
          this.picture = data.results[0].picture.large;
        });
    },
  },
});

app.mount("#app");

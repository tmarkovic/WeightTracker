const inquirer = require("inquirer");
let createUser = [
  {
    name: "name",
    type: "input",
    message: "Enter your name",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your name";
      }
    }
  },
  {
    name: "height",
    type: "input",
    message: "Enter your height in meters",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your height";
      }
    }
  }
];

let createEntry = [
  {
    name: "weight",
    type: "input",
    message: "Enter your weight",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your weight";
      }
    }
  },
  {
    name: "chest",
    type: "input",
    message: "Enter your chest circumference",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your chest circumference";
      }
    }
  },
  {
    name: "neck",
    type: "input",
    message: "Enter your neck circumference",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your neck circumference";
      }
    }
  },
  {
    name: "hip",
    type: "input",
    message: "Enter your hip circumference",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your hip circumference";
      }
    }
  },
  {
    name: "waist",
    type: "input",
    message: "Enter your waist circumference",
    validate: function(value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter your waist circumference";
      }
    }
  }
];

module.exports = {
  askEntryQuestions: () => {
    return inquirer.prompt(createEntry);
  },
  askSetupQuestions: () => {
    return inquirer.prompt(createUser);
  }
};

const chalk = require("chalk");
const figlet = require("figlet");
const wizard = require("./wizard");
const util = require("./util");
const fs = require("fs");

// table is an Array, so you can `push`, `unshift`, `splice` and friends

console.log(
  chalk.yellow(
    figlet.textSync("Weight Tracking System", { horizontalLayout: "full" })
  )
);

const run = async () => {
  if (util.userExists()) {
    const entry = await wizard.askEntryQuestions();
  } else {
    const user = await wizard.askSetupQuestions();
    util.setupUser(user.name, user.height, (u, h) => u);
    const entry = await wizard.askEntryQuestions();
    util.writeEntry(Object.assign({ date: new Date() }, entry));
  }
};

run();

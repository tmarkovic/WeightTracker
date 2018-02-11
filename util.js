const fs = require("fs");
var Table = require("cli-table2");

// instantiate
var table = new Table({
  head: ["Date", "Weight", "Neck", "Chest", "Waist", "Hips"],
  colWidths: [30, 20, 20, 20, 20, 20]
});

module.exports = {
  userExists: () => {
    return fs.existsSync("./data/data.json");
  },
  setupUser: (name, height, cb) => {
    fs.writeFile(
      "./data/data.json",
      JSON.stringify({ name, height, entries: [] }),
      err => cb
    );
  },
  writeEntry: (entry, cb) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
      if (err) throw err;
      var pastData = JSON.parse(data);
      pastData.entries.push(entry);

      fs.writeFile(
        "./data/data.json",
        JSON.stringify(pastData),
        "utf-8",
        err => {
          if (err) throw err;
          table.push([
            entry.date
              .toISOString()
              .replace(/T/, " ")
              .replace(/\..+/, ""),
            entry.weight,
            entry.neck,
            entry.chest,
            entry.waist,
            entry.hip
          ]);
          console.log(table.toString());
        }
      );
    });
  }
};

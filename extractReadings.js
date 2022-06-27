const file = require("fs");
const inputFile = process.argv[2];
const outputFile = process.argv[3];

file.readFile(inputFile, "utf8", function readFileCallback(err, data) {
  const regex = /(?:<p[^>]*>)(.*)(?:<\/p*>)/g;
  const matches = data.match(regex).map(function (split1) {
    return split1.split(">").map(function (split2) {
      return split2.split("<");
    });
  });

  const readingsArray = [];

  for (const element of matches) {
    readingsArray.push(element[1][0]);
  }

  let readings = '';

  for (let i = 0; i < readingsArray.length; i++) {
    if (i % 2 === 0) {
      readings += readingsArray[i] + ',';
    } else {
      readings += readingsArray[i] + '\n'
    }
  }

  file.writeFile(outputFile, readings, (err) => {
    if (err) console.log(err);
  });
});

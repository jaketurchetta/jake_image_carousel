const fs = require('graceful-fs');
const path = require('path');

const propertiesPath = path.join(__dirname, '/properties.csv');
const file = fs.createWriteStream(propertiesPath);


// START TIME
console.log(Date.now());

// SEED 1M PROPERTIES

const propertiesHeader = `id\n`;
file.write(propertiesHeader);

for (let i = 0; i < 10000000; i++) {
  let data =  `${i}\n`;
  file.write(data);
}

file.end();

// END TIME
console.log(Date.now());
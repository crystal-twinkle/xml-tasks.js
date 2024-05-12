const fs = require('fs');
const xml2js = require('xml2js');

const xmlData = fs.readFileSync('Task2.xml', 'utf8');


xml2js.parseString(xmlData, (err, result) => {
  if (err) {
    console.error('Error parsing', err);
    return;
  }

  result.root.str1[0] = result.root.str1[0].split('').reverse().join('').replace(/[\r/]/g, '');

  result.root.str2[0] = result.root.str2[0].replace(/\d/g, '').replace(/[\r/]/g, '');

  result.root.str3[0] = result.root.str3[0].replace(/\D/g, '').replace(/[\r/]/g, '');

  result.root.str4[0] = `number of spaces ${result.root.str4[0].split(/\s/g).length - 1}`;

  const builder = new xml2js.Builder();
  const modifiedXmlData = builder.buildObject(result);

  fs.writeFileSync('Task2_modified.xml', modifiedXmlData, 'utf8');
});

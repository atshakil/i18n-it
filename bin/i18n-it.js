#!/usr/bin/env node

const
  path = require('path'),
  fs = require('fs'),
  translate = require('google-translate-api'),
  sourceFile = path.resolve(process.cwd(), process.argv[3]),
  targetFile = path.resolve(process.cwd(), process.argv[4]);

fs.readFile(sourceFile, 'utf8', (e, content) => {
  if(e) throw e;

  try {
    let
      normalized_data = {},
      data = JSON.parse(content);

    Object.keys(data).sort().forEach(nth => { normalized_data[nth] = data[nth] });

    Promise.all(Object.values(normalized_data).map(nth => translate(nth, {from: 'en', to: process.argv[2]})))
      .then(result => {
        let translations = {}
        Object.keys(normalized_data).forEach((nth, index) => translations[nth] = result[index].text);
        fs.writeFile(targetFile, JSON.stringify(translations, null, 2).concat('\n'), (e, content) => {
          if(e) throw e;
          try {} catch(e) { console.error(e); }
        });
      });
  } catch(e) { console.error(e); }
});

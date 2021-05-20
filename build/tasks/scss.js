const sass = require('node-sass');
const fs = require('fs-extra');
const colors = require('colors');

module.exports.buildSass = () => {

  sass.render({
    file: 'src/scss/main.src.scss',
    outputStyle: 'compressed'
  }, (err, result) => {
    console.log(result.css.toString())
    if(err) {
      throw err
    } else {
      fs.mkdirpSync('target/css');
      fs.writeFile('target/css/style.css', result.css.toString());
      console.log(`target/css/style.css modified`.bold);
    }
  });
}

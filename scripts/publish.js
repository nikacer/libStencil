const { publish } = require('publish-to-git');
const { version } = require('../package.json');

console.log('Iniciando el proceso de carga en git');

const options = {
  tag: `v${version}`,
  push: {
    remote: 'origin',
    force: false,
  },
};

console.log('Cargando...');

publish(options)
  .then(() => {
    console.log('Se ha cargado correctamente');
  })
  .catch(err => {
    console.error('Se presento un error: ', JSON.stringify(err));
  });

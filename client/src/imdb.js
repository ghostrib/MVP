const imdb = require('imdb-api');
const apiKey = require('./api.config').apiKey

const cli = new imdb.Client({ apiKey: apiKey });

cli.search({ 'name': 'The Toxic Avenger' })
    .then(search => {
        for (const result of search.results) {
            console.log(result.title);
        }
    })
    .catch(error => { throw error })


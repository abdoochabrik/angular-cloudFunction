
/*//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/inpt-cloud-mamgas'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/inpt-cloud-mamgas/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 2121);
*/
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
 app.use(express.static('./dist/TPSERVERLESS'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/TPSERVERLESS/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

const express  = require ('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const { mongoose } = require('./database');

//CONFIGURACION
app.set('port',process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("combined"));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//RUTAS
app.use('/api/equipos',require('./routes/equipos.routes'))
app.use('/api/users',require('./routes/users.routes'));

//ARRANCAR EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
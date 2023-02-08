const express  = require ('express');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

//CONFIGURACION
app.set('port',process.env.PORT || 3000);

//MIDDLEWARES
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//RUTAS
app.use('/api/equipos',require('./routes/equipos.routes'));

//ARRANCAR EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
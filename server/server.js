// // vvvvv FROM THE LEARN PLATFORM vvvvv //
// const express = require('express');
// const app = express();
// require('./routes/product.routes')(app); // This is new
// const port = 8000;
// app.listen(port, () => console.log(`Listening on port: ${port}`) );

// // vvvvv 2nd version FROM THE LEARN PLATFORM vvvvv //
const express = require('express');
const app = express();


const cors = require('cors'); // This is new
app.use(cors(), express.json()); // This is new

app.use(express.urlencoded({ extended: true })); // This is new


require('./routes/product.routes')(app); // This is new

const connectDb = require('./config/mongoose.config');
connectDb();

// const productRouter = require('./routes/product.routes');
// app.use('/api', productRouter);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})






// ---------------------------------------------------------
// // vvvvvv CISO'S WAY vvvvvv //

// const express = require("express");
// const app = express();

// const dotenv = require("dotenv");
// dotenv.config();

// const productRouter = require('./routes/product.routes');
// app.use('/api', productRouter);

// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`Listening on port: ${port}`));
// ---------------------------------------------------------
// vvv CAN'T GET THIS TO WORK, GETTING ERROR BELOW vvv //
// node:events:491
// throw er; // Unhandled 'error' event
// ^
// Error: listen EACCES: permission denied 8000;
// at Server.setupListenHandle [as _listen2] (node:net:1446:21)
// at listenInCluster (node:net:1511:12)
// at Server.listen (node:net:1610:5)
// at Function.listen (C:\Users\izzy\OneDrive\Documents\CODING DOJO\Javascript MERN\5 Full Stack MERN\pa_product_manager_part1\server\node_modules\express\lib\application.js:635:24)
// at Object.<anonymous> (C:\Users\izzy\OneDrive\Documents\CODING DOJO\Javascript MERN\5 Full Stack MERN\pa_product_manager_part1\server\server.js:16:5)
// at Module._compile (node:internal/modules/cjs/loader:1155:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
// at Module.load (node:internal/modules/cjs/loader:1033:32)
// at Function.Module._load (node:internal/modules/cjs/loader:868:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// Emitted 'error' event on Server instance at:
// at emitErrorNT (node:net:1490:8)
// at processTicksAndRejections (node:internal/process/task_queues:83:21) {
// code: 'EACCES',
// errno: -4092,
// syscall: 'listen',
// address: '8000;',
// port: -1
// }
// [nodemon] app crashed - waiting for file changes before starting...

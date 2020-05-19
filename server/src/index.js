import {server} from './server'
import {connectDB} from "./lib/database"
connectDB();


server.start({port: 4000}, ({port}) => {
  console.log('Server on port', port);
});
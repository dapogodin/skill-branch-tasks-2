import Modules from '../v1.modules';
import ParserConfig from './ParserConfig';
import GetEnvData from './GetEnvData';

export default (ctx) => {

    const resource = {

        getNestedConfig: async(req, res) => {
            const data = req.body;

            /*const data = `PORT=8080
HOSTNAME=localhost
middlewares.accessLogger=1
middlewares.bodyParser.json=1
middlewares.bodyParser.urlencoded.limit=50mb
middlewares.bodyParser.urlencoded.extended=1
middlewares.reqData=1
middlewares.cookieParser=1
middlewares.cors=0`;*/

            res.send(ParserConfig(data));
        },

        logEnvFile: async(req, res) => {
            const data = GetEnvData();
            console.log(data);

            res.send(data);
        },
    };

    return resource;
};
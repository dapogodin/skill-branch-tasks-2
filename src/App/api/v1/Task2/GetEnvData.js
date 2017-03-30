import fs from 'fs';
import _ from 'lodash';
import ParserConfig from './ParserConfig';

export default function(envFileName) {
    if (!envFileName) {
        const files = fs.readdirSync('./');
        envFileName = _.chain(files)
            .filter(f => f.indexOf('.env') !== -1)
            .first()
            .value();
    }

    if (!envFileName)
        return {};

    const envData = fs.readFileSync('./' + envFileName, { encoding: 'utf8' });

    return ParserConfig(envData);
}
import _ from 'lodash';

export default function(data) {
    let res = {};
    if (!data)
        return res;

    _.chain(data.replace(/\r\n/g, '\n').split('\n'))
        .filter(p => (/^.+=.+$/).test(p))
        .forEach(p => {
            const [key, val] = p.split('=');
            _.set(res, key, val);
        }).value();

    return res;
}
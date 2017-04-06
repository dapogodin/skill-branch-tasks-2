import _ from 'lodash';

export default function(str) {
    //удаляем всё кроме слов и пробелов
    str = str.toLowerCase().replace(/[^\w\s]/g, '');

    if (!str)
        return {};

    return _.chain(str.split(/\s+/))
        .countBy()
        //.groupBy()
        //.forEach((val, key) => { res[key] = val.length; })
        .value();
}
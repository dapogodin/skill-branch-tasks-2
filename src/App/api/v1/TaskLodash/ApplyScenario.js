import _ from 'lodash';

//Вывод сценария
export default function(i, scenario) {
    if (typeof(scenario) == 'function')
        i = scenario(i);
    else
        _.chain(scenario)
        .flattenDeep()
        .forEach(sc => { i = sc(i); })
        .value();

    console.log(i);
    return i.toString();
}
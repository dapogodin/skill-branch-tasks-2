import Modules from '../v1.modules';
import f1 from './GetWordFrequency';
import f2 from './ApplyScenario';

export default (ctx) => {

    const resource = {

        getWordFrequency: async(req, res) => {
            //const data = req.body;
            const data = `Lorem ipsum dolor sit amet, ne dicat propriae torquatos mei, nam doming eirmod sapientem ne. Nec sint recusabo ad, duo delenit inciderint ut. Eu qui adhuc affert dicant. Ne sonet argumentum sea, his lorem delectus ex, no mel minim exerci. Pro te labore habemus reformidans, eu dolor feugiat tractatos sed.`;
            res.send(f1(data.toString()));
        },

        applyScenario: async(req, res) => {
            //Функции
            const plus = i => i + 1;
            const multy = i => i * 2;

            //Сценарии
            const scenario1 = plus;
            const scenario2 = [
                multy,
            ];
            const scenario3 = [
                plus,
                multy,
                plus,
            ];
            const scenario4 = [
                plus,
                scenario3, [
                    scenario1,
                    scenario2,
                ],
                scenario1
            ];

            res.send(`f2(1, scenario1) = ${f2(1, scenario1)}<br/>
                      f2(22, scenario2) = ${f2(22, scenario2)}<br/>
                      f2(4, scenario3) = ${f2(4, scenario3)}<br/>
                      f2(0, scenario4) = ${f2(0, scenario4)}`);
        },
    };

    return resource;
};
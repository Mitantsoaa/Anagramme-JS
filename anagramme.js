const mots = require('./data/mots.json');

function countLetter(str)
{
    return str.toLowerCase().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').split('').sort().join('')
}


const resAnna = mots.reduce((acc,cur, index, array) => {
    if (!acc.hasOwnProperty(countLetter(cur))){
        acc[countLetter(cur)] = []
    }

    acc[countLetter(cur)].push(cur)

    return acc
}, {})

console.log(Object.values(resAnna).filter(a => a.length > 1))

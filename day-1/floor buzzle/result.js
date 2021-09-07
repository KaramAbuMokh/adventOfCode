const fs = require('fs');

fs.readFile('input.txt',(error,input)=>{
    console.time('time')

    error ? console.log('errrrrrr'):null
    input=input.toString()
    let cnt=0

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        element === "("? cnt++:cnt--
    }

    console.log(input.length)

    console.timeEnd('time')
})
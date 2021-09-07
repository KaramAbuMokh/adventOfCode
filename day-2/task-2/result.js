const fs=require('fs');


fs.readFile('../input.txt',(err,input)=>{
    let lines=input.toString().split('\n');
    let count=0
    lines.forEach(element => {

        let dims=element.split('x')
        let x1=Number(dims[0])
        let x2=Number(dims[1])
        let x3=Number(dims[2])

        count=count+(2*x1)+(2*x2)+(2*x3)-Math.max(2*x1,2*x2,2*x3)
        count=count+x1*x2*x3

        
    });

    console.log(count)
})


const fs=require('fs')

let cnt=0

class Tree{
    constructor(){
        this.root=null;
    }

    insert(value,head){
        
        if(head===null){
            return new NodeTree(value[0],value[1])
        }

        if(value[0]>head.value){
            head.right=this.insert(value,head.right)
            return head
        }

        if(value[0]<head.value){
            head.left=this.insert(value,head.left)
            return head
        }

        if(value[0]===head.value){
            head.root=head.insert(value[1],head.root)
            return head
        }


    }
}

class Node {
    constructor(value,right,left){

        this.value=value
        this.left=left
        this.right=right
        cnt++
    }
}

class NodeTree {
    constructor(mainValue,secondaryValue){

        this.value=mainValue
        this.left=null
        this.right=null
        this.root=new Node(secondaryValue,null,null)
    }

    insert(value,head){
        
        if(head===null){
            return new Node(value,null,null)
        }

        if(value>head.value){
            head.right=this.insert(value,head.right)
            return head
        }

        if(value<head.value){
            head.left=this.insert(value,head.left)
            return head
        }

        if(value===head.value){
            return head
        }


    }
}




fs.readFile('../input.txt',(error,input)=>{
    if(error){
        console.log('error : ',error)
    }

    input=input.toString()

    let x1=0
    let y1=0
    let x2=0
    let y2=0
    let tree=new Tree()


    for (let index = 0; index < input.length; index++) {
        index%2===0 ? tree.root=tree.insert([x1,y1],tree.root):tree.root=tree.insert([x2,y2],tree.root)
        const element = input[index];

        switch(element.toString()){
            case '>':{
                index%2===0 ? x1++ : x2++
                break
            }
            case '<':{
                index%2===0 ? x1-- : x2--
                break
            }
            case '^':{
                index%2===0 ? y1++ : y2++
                break
            }
            case 'v':{
                index%2===0 ? y1-- : y2--
                break
            }
        }
    }
    tree.root=tree.insert([x1,y1],tree.root)
    tree.root=tree.insert([x2,y2],tree.root)
    console.log(cnt)

})
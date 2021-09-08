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

    let x=0
    let y=0
    let tree=new Tree()


    for (let index = 0; index < input.length; index++) {
        tree.root=tree.insert([x,y],tree.root)
        const element = input[index];

        switch(element.toString()){
            case '>':{
                x++
                break
            }
            case '<':{
                x--
                break
            }
            case '^':{
                y++
                break
            }
            case 'v':{
                y--
                break
            }
        }
    }
    tree.root=tree.insert([x,y],tree.root)
    console.log(cnt)

})
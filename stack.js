// stack perform pop(),push() and peek() operation only
//stack follow lifi method


class Stack{
   constructor(){
//store the value in object form like {1:"apple",2:"boy"}
this.storage={};
//here this size of the object and index of the object start from 1 
this.index=0;
}
//adding an element
push(element){
  this.index++;
  this.storage[this.index]=element;
   }
//removing an element
pop(){
let removed =this.storage[this.index];
delete this.storage[this.index];
this.index--;
return removed;
     }

//showing  the element on top
peek(){return this.storage[this.index]; }
}

const stack =new Stack;


stack.push("apple");
stack.push("boy");
stack.push("cat");
stack.push("dog");
stack.push("ear");

console.log(stack);


stack.pop();
stack.pop();


console.log(stack);

console.log(stack.peek());


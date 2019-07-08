class Queue{
   constructor(){
   this.storage={};
   this.head=0;
   this.tail =0;
    }

//adding element fron beging 
     enqueue(element){
      this.storage[this.head]=element;
     this.head++;
      }

//removing an element from beging

    dequeue(){
   
let removed =this.storage[this.tail];
delete this.storage[this.tail];
this.tail++;
return removed;
    
     }


}


const queue =new Queue();



queue.enqueue("apple");
queue.enqueue("boy");
queue.enqueue("cat");
queue.enqueue("dog");
console.log(queue);
queue.dequeue();
console.log(queue);




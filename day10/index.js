
// class Stack{
//     constructor(){
//         this.length = 0;
//         this.stack = [];
//     }
//     push(x){
//         this.stack[this.length] = x;
//         this.length++;
//     }
//     pop(){
//         this.stack.pop();
//         this.length--;
       
//     }
//     peek(){
//         return this.stack[this.length-1];
//     }
// }

// let s1 = new Stack();
// s1.push(5);
// s1.push(6);
// s1.pop();
// console.log(s1);
// console.log(s1.peek());

class Mobile{
    constructor(b,bt){
        this.brand = b;
        this.calling = true;
        this.battery = bt;
    }
}
// let m1 = new Mobile("iPhone",5000);
// // console.log(m1);

class SmartPhone extends Mobile{
    constructor(b,bt,c,s){
        super(b,bt);
        this.camera = c;
        this.screenSize = s;
    }
}

let m2 = new SmartPhone("iPhone",5000,"20px","6.5 in");
console.log(m2);
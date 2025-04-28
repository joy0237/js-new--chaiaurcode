// for
for(let i = 0 ; i <= 10; i++){
    const element = i;
    if(element == 5){
        // console.log(`${element} is the best number`);        
    }
    // console.log(element);    
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);    
    for (let j = 0; j <= 10; j++){
        // console.log(`inner loop ${j} and the value of outer loop ${i}`);        
        // console.log(`${i} * ${j} = ${i*j}`);        
    }   
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}



//keywords break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected ${index}`);
//         break;
//     }
//     console.log(`value of index ${index}`);   
// }

// Ctrl + d => duplicate one element and Alt+ Shift + down Arrow => duplicate multiple line
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected ${index}`);
        continue;
    }
    console.log(`value of index ${index}`);   
}

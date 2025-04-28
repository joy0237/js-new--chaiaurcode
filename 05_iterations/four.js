const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
//    console.log(`${key} is shortcut for ${myObject[key]}`);   
}

const Programming = ["js", "rb", "py", "java", "cpp"];
for (const prog in Programming) {
    // console.log(prog);
    // console.log(`${prog} is shortcut for ${Programming[prog]}`); 
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN',"India");
for (const key in map) {
    console.log(key);    
}
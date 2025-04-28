const coding = ["js", "ruby", "python", "java", "cpp"]
coding.forEach(  function (item) {
    //console.log(item);    
})// callback function - its doesn't need a name since it is running inside a function the parameters wil the parameters of te function it is called in

// coding.forEach((val) => {
//     console.log(val);    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // give refernce no need to execute

coding.forEach ((item, index, arr) => {
    // console.log(item, index, arr);    
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})


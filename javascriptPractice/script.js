// scope 

let globalVar = "global";


const greet = () => {
    let functionVar = "function"
    if(true)
    {
        let blockVar = "block"
        console.log(globalVar)//accesible
        console.log(functionVar)//accesible
        console.log(blockVar)//accesible
    }
    console.log(globalVar)//accesible
    console.log(functionVar)//accesible
    // console.log(blockVar)//not accesible

    

}

greet();
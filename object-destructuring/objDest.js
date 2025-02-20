const Obj = {
    name : "raj",
    class : "second"
}

// apan ise pahle tarike se is prakar kar sakte hai 

console.log(`my name is ${Obj.name} and i am in ${Obj.class}`)
console.log(`obj is end `)
// ab yaha par apan ek kam kar skte hai yadi apne ko bar bar obj. obj . nahi likhna hai to 

const Obj1 = {
    name : "rohit",
    class : "third"
}

// ab yaha par object destructuring kar rahe hai , es 5 me  : 

let myName = Obj1.name;
let grade = Obj1.class;

console.log(`my name is ${myName} and i am in ${grade}`)
console.log(`obj1 is end `)

// apne pas ek tarika aur hai thoda aur age badhte hai es 6 me : 

const Obj2 = {
    name : "ajay",
    grade : "fourth"
}

let {MyName , Grade} = Obj2;
console.log(`my name is ${MyName} and I am in ${Grade}`)

// to dekho mene yaha par obj2 ki props ko MyName and Grade me dalne ka try kiya to isne err di 

// err ni di means undefined likh diya vaha par 

// ab me object 3 banata hu and tujhe dekhne ko milega ki ye err nahi dera hai 


const Obj3 = {
    nam : "prashant",
    kaksha : "7th"
}

let {nam , kaksha } = Obj3;

console.log(`my name is ${nam} and i am in ${kaksha}`);

// ab yaha par ye hora hia ki jab apan ek jaisa name do to hi ye likhta hai exact name varna output me undefined likhke bhejta hai 

// dekho iska ek aur tarika hai likhene ka vo me obj 4 me battata hu 

const Obj4 = {
    colorName : "red",
    use : "for attractiveness"
}

let colorName , use;
({colorName, use } = Obj4) //dekho ham direct {colorName , use } = Obj4 nahi likh sakte iske liye hame ye round bracket lagana mendatory hai 

console.log(`color name is ${colorName} and it is use ${use}`)

// now we use the obj3 wala tarika in which we just apply the variable names into curly braces 

// revise that technique , sorry one more technique we discuss about , and jo hame err ayi thi ki hamne yadi obj props ke jaise name nahi likha to kya hoga ? 

// to just ham batate hai 

// chalo me direct karke bata deta hu 

const Obj5 = {
    shutterName : "raja",
    location : "rajpur"
}

let {shutterName : sName , location : loc } = Obj5;

console.log(`shutter company name is ${sName} and location is ${loc}`)

// one more thought coming what if when obj is occur in obj itself 

const Obj6 = {
    city : "rajpur",
    state : "any state ",
    scheme : {
        water_supply : "2 cr",
        road_const : "7 cr "
    }
}

let {city : city , state : st , scheme : scheme } =  Obj6;

console.log(`we make ${city} in ${st} as a smart city where we spend in schemes like water supply ( ${scheme.water_supply} ) and road const ( ${scheme.road_const})`);

// so here we use the real application of obj okay 
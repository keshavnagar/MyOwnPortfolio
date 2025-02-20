 
// function addStudentsInNewArray (students) {
//     let i = 0; 
//     i++;
//     return i +" " + students 
// }

// const array = ["meet","kartik","man","ajay"]
// const newArray = array.map(addStudentsInNewArray);
// console.log(newArray)

// jaise mene pahle likha meet to ye map functino meet ko pakdega and iske upar jo addstudent wala fucntion hsi , ispe apply kar dega , and jo bhi fucntio se return hoga vo newarray me assign ho jayega 

// ek doubt jo hamesha keshav pucchta hai ki me apn ap se kaise ye skill develp karunga to vo ho jayegi jab tu us chij ko samjhega to apne aap hoti jayegi chinta mat kar bas kyuki chinta apne mind ko assign ho jati hai and fir apne mind me storage nahi hota in sab chijo ke liye 

//,ikje [ata tu use yad kar raha hai but fir se ek bar soch jaise jaise tu kisi dusri chij ko yad karega ye tujse door hoti jayegi and if ye door hui to tu apne sapne pure nahi kar payega maan meri bat vo ek limit tak thik hai but dhyan rakh please manja ]


let i = 0 ; 
const add = (students) => {
   
    i ++;
    return i + " " + students;

}

const a = ["raj","kishore","arjun","vivek"]
const newA = a.map(add);
console.log(newA);
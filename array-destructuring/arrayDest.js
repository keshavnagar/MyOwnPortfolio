const OneArray = ["c","c++","java","python"]


// in es 5 

const l1 = OneArray[0];
const l2 = OneArray[1];
const l3 = OneArray[2];
const l4 = OneArray[3];

// output 

console.log("my fav one is " + l1)

// we also write this thing like 

console.log("my fav one is " + OneArray[0])

console.log("First array is end ")

// in both case the output is same 

// but a new way comes in es 6 

// we assign values in different way 

// now we take different array 

const SecondArray = ['c','c++','python','java']

const [ln1,ln2,ln3,ln4] = SecondArray;

console.log("my fav one is " + ln1)
console.log("my fav one in " + ln2)
console.log("my fav one is " + ln3)
console.log("my fav one in " + ln4)

// so this is called array destructuring 

// one more experinment with this : 

console.log("second array is end ")

const ThirdArray = ['c','c++','python','java']

const [lng1,,lng3,lng4] = SecondArray;

console.log("my fav one is " + lng1)
console.log("my fav one is " + lng3)
console.log("my fav one in " + lng4)

console.log("third array is end ")

// is exp se pata chalta hai ki apan , ke use se things ko define kar skte hai samjeh 

// one more expe i will perform 

// like we use let [lngg 1 , lngg 2]

// we also use let lngg1 , lngg2;

// and then [lngg1, lngg2]

// so this is also valid

const fourthArray = ['java','python','c','c++'];

let lngg1 , lngg2;

[lngg1, lngg2 ] = fourthArray;

console.log(`my favorite one is ${lngg1} and second favorite one is ${lngg2}`)

console.log(`fourth array is end `)

// ise samanya bhasha me apan kah sakte hai ki yadi apne ko kisi array ke elenmets ko distinct variable me store karna hai to apan use store kar sakte hai 

// okay 

// aur han apni sari hi programming languge favorite hai koi first and second ka means comparisoin nahi hai vo to just likh diya apne ko concept samjhna tha isliye jai ho 

// ek video end hui apan twitter se kuch content dekhte hai aur use implnement karte hai by 



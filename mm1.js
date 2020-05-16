const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge =(pet)=> new Date().getFullYear()-pet.bornOn;
console.log(getAge);



let petsWithAge = [];
function   ( ){
   pet.forEach(pet.age =>{
  pet.age = getAge(pet);});
}
console.log(petsWithAge);





let dogs = [];
function filterdogs (){
    return pet.filter((pet)=>{
        return pets.type==="dog" ;
    })
  }
    console.log(dogs);





const jasper;
function findjasper(name) {
    return pet.find(pet =>{return pet.name == jasper})
}
console.log(`Jasper is  ${ jasper.age} , years old `);
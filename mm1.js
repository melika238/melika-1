const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge =(pet)=> new Date().getFullYear()-pet.bornOn;
console.log(getAge); // houni function so console.log mandhch valeur ajoutée


pet.forEach(pet.age =>pet.age = getAge(pet));


let dogs =pet.filter((pet)=>{
        return pets.type ==="dog" ;
    })
console.log(dogs);


const jasper;
jasper =  pet.find(pet =>{return pet.name == jasper})
}
console.log(`Jasper is  ${ jasper.age} , years old `);

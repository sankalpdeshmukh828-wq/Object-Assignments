const student = {
  name: "Sankalp",
  age: 22,
  grade: "A",
  subject:"Computer Science"
};
console.log(student);

                          //Assignment 1://

const book = {
  title: "Java",
  author: "James gosling",
  details: {
    pages: 25000000,
    genre: "Programming"
  }
};
console.log(book.details.pages);
console.log(book.details.genre);


                         //Assignment 2 //


const product = {
  name: "Mobiles",
  price: 50000,
  stock: 25
};

for (let key in product) {
  console.log(key + " : " + product[key]);
}



                     //Assignment 3: //


const person1 = {
  name: "Ramesh",
  age: 23
};

const person2 = {
  name: "Sarthak",
  age: 22
};

// Compare name
if (person1.name === person2.name) {
  console.log("Names are same");
} else {
  console.log("Names are different");
}

// Compare age
if (person1.age === person2.age) {
  console.log("Age is same");
} else {
  console.log("Age is different");
}





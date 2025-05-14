let user = {
  name: "Pratham",
  age: 18,
  isLearning: true,
  nullable: null,
  undefined: undefined,
  welcome: function () {
    console.log(`${this.name} , Welcome to the world of JS`);
  },
};

user.welcome(); // Pratham , Welcome to the world of JS
user.name = "John";
user.welcome(); // John , Welcome to the world of JS


let arrow = () => {
  console.log("Hello World");
}

const addTwo= (num1,num2) =>{
    return num1+num2;
}


const obj= (num1,num2) =>({obj: "Decalred Object"});

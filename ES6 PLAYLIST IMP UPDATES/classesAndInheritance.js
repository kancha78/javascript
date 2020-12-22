// Classes

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  //method in the class
  register() {
    console.log(this.username, `is now registered`);
  }
}

let bob = new User('bob', 'bob@email.com', '12345');

bob.register();

/// other Method

//method in the class
// static countUsers() {
//     console.log(`There are 50 Users`);
//   }

//   register() {
//     console.log(this.username, `is now registered`);
//   }
// }

// User.countUsers();

/// below is incomplete but we can extend user with that as well.

// class Member extends User{
//     constructor(username, email, password, memberPackage){
//         super(username, email, password);
//         this.package = memberPackage;
//     }
//     getPackage(){
//         console.log(this.username, `This subscribed to this`)
//     }
// }

// Classes with Inheritance

// https://youtu.be/RBLIm5LMrmc?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv&t=248

'use strict';

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Registering new user with register()method
  register() {
    console.log(`${this.username} is now registered`);
  }
  // Static method
  static countUsers() {
    console.log(`There are 50 users`);
  }
}

// // creating new  user
// let kam = new User('Kamran', 'kami@gmail.com', 'abcd');

// // calling register method
// kam.register();

// User.countUsers();

// *************************

class Member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password);
    this.package = memberPackage;
  }
  //  creating method
  getPackage() {
    console.log(
      `${this.username} is subscribed to the ${this.package} package`
    );
  }
}

// Creating new Member with package details
let safia = new Member('Safia', 'saf@gmail.com', 'abcd', 'standard');

safia.getPackage();
safia.register(); // we can also apply register() method as well.

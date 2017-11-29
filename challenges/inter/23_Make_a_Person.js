/*jshint esnext:true*/

class Person {
  constructor(firstAndLast) {
    let [fname, lname] = firstAndLast.split(' ');
    // by-pass this private fields requirement.... 
    Object.assign(this, {
      getFullName() {
          return `${fname} ${lname}`;
        },
        getFirstName() {
          return fname;
        },
        getLastName() {
          return lname;
        },
        setFirstName(first) {
          fname = first;
        },
        setLastName(last) {
          lname = last;
        },
        setFullName(firstAndLast) {
          [fname, lname] = firstAndLast.split(' ');
        }
    });
  }
  
}

var bob = new Person('Bob Ross');
bob.getFullName();

/*
1. Class
2. Read only Properties
3. Optional property


4. Static properties and methods
    // 1) static properties/methods are common/shared across all the objects
   // 2) static properties/methods can be accessed through class name directly
    // 3) static properties /methods can be modified using class
    //4) we cannot use 'this' for static properties , instead we can use class name.

*/


class Student
{

readonly studentId:number;  // Read-only property (can only be assigned once, inside constructor)
name:string;    //Regualr property
email?:string;  // Optional property (can be undefined)
static schoolName:string="Greenwood High"; // Static variable shared among all instances/objects

// Constructor to initialize student properties
constructor(id: number, name: string, email?: string) {
    this.studentId = id;
    this.name = name;
    this.email = email; // email can be undefined if not provided
  }

  // Method to display student information (Named function)
 displayInfo(): void {
    console.log("Student ID:", this.studentId);
    console.log("Student Name:", this.name);

    if (this.email) {
      console.log("Email:", this.email);
    } else {
      console.log("Email is not provided.");
    }

    // Access static property using class name
    console.log("School Name:", Student.schoolName);
  }


//  Method to display student information(Anonymous method using arrow function syntax)
 /*displayInfo = (): void => {
    console.log("Student ID:", this.studentId);
    console.log("Student Name:", this.name);

    if (this.email) {
      console.log("Email:", this.email);
    } else {
      console.log("Email is not provided.");
    }

    console.log("School Name:", Student.schoolName);
  };
  */



  // Static method to change the school name
  static changeSchoolName(newName: string): void {
    Student.schoolName = newName;
  }
}

// Creating Student objects
const s1 = new Student(101, "John");
const s2 = new Student(102, "Bob", "bob@gmail.com");

// Display initial student information
console.log("Initial student info:");
s1.displayInfo();
s2.displayInfo();

// Try to change read-only property 
// s1.studentId = 999; // Error: Cannot assign to 'studentId' because it is a read-only property.

// Change the static school name
Student.changeSchoolName("Sunrise Academy");

// Display updated student information after school name change
console.log("After changing the school name:");
s1.displayInfo();
s2.displayInfo();

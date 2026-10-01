// ================= TASK 1 =================

// Part 1 & 2: Biography stored in variables using 'var'
var name = "Abdy";
var age = 21;                  // number
var isStudent = true;          // boolean
var university = "Your University Name";
var city = "Your City";
var country = "Your Country";
var degreeName = "BS Computer Science";
var semester = 5;
var cgpa = 3.4;

console.log("----- Biography (using variables) -----");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);
console.log("University: " + university);
console.log("Location: " + city + ", " + country);
console.log("Degree: " + degreeName + " (Semester " + semester + ")");
console.log("CGPA: " + cgpa);

// Part 3: Biography as a JS Object with nested objects
var biography = {
  name: "Abdy",
  age: 21,
  isStudent: true,
  address: {
    street: "123 Main Street",
    city: "Your City",
    country: "Your Country"
  },
  degreeProgram: {
    title: "BS Computer Science",
    university: "Your University Name",
    semester: 5,
    cgpa: 3.4
  },
  hobbies: ["Game development", "Coding"]
};

// Print values individually (not the entire object)
console.log("\n----- Biography (using object) -----");
console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Is Student: " + biography.isStudent);
console.log("Street: " + biography.address.street);
console.log("City: " + biography.address.city);
console.log("Country: " + biography.address.country);
console.log("Degree: " + biography.degreeProgram.title);
console.log("University: " + biography.degreeProgram.university);
console.log("Semester: " + biography.degreeProgram.semester);
console.log("CGPA: " + biography.degreeProgram.cgpa);
console.log("Hobbies: " + biography.hobbies.join(", "));

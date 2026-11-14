let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: () => "" // temporary placeholder
};

// Now assign the actual arrow function
student.getSummary = () => {
    return `${student.name} is ${student.age} years old and scored grade ${student.grade}`;
};

console.log(student.getSummary()); // Scott is 15 years old and scored grade A
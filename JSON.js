//JSON
//{key:value}
let student = {regno:'2021/ICT/59', name:'Sankalpa', age:24, course:'IT', skills:['Java', 'JS', 'C++']}
console.log(student)
console.log(student.name)



//PROBLEM:
//Define 10 students JSON
//Store it in an Array
//Find the female students
//Find the students who are following IT course
//Find the max and average GPA among the students

console.log("Problem:")
let students = [
{regno:'2021/ICT/01', name:'Shani', age:21, gender:'Female', course:'IT', gpa:3.3},
{regno:'2021/ICT/02', name:'John', age:22, gender:'Male', course:'AMC', gpa:2.9},
{regno:'2021/ICT/03', name:'David', age:24, gender:'Male', course:'Bio', gpa:3.7},
{regno:'2021/ICT/04', name:'Eli', age:23, gender:'Female', course:'AMC', gpa:3.1},
{regno:'2021/ICT/05', name:'Ann', age:22, gender:'Female', course:'IT', gpa:3.5},
{regno:'2021/ICT/06', name:'Sahan', age:24, gender:'Male', course:'Bio', gpa:2.7},
{regno:'2021/ICT/07', name:'Kasun', age:21, gender:'Male', course:'AMC', gpa:3.3},
{regno:'2021/ICT/08', name:'Ruwini', age:22, gender:'Female', course:'IT', gpa:3.8},
{regno:'2021/ICT/09', name:'Oshi', age:22, gender:'Female', course:'IT', gpa:3.1},
{regno:'2021/ICT/10', name:'Lashan', age:23, gender:'Male', course:'Bio', gpa:2.5},
]
console.log(students)

//Find the female students
let femaleStu = [];
for (let i=0;i<students.length;i++) {
    if (students[i].gender == 'Female') {
        femaleStu.push(students[i]);
    }
}
console.log("Female Students:", femaleStu);

//Find the students who are following IT course
let ITstu = [];
for (let j=0;j<students.length;j++) {
    if (students[j].course == 'IT') {
        ITstu.push(students[j]);
    }
}
console.log("IT Students:", ITstu);

//Find the max and average GPA among the students
let totalGPA = 0;
let maxGPA = students[0].gpa;

for (let k=0;k<students.length;k++) {
    totalGPA += students[k].gpa;
    if (students[k].gpa>maxGPA) {
        maxGPA = students[k].gpa;
    }
}

let avgGPA = totalGPA / students.length;
console.log("Max GPA among students:", maxGPA);
console.log("Average GPA of students:", avgGPA.toFixed(2));
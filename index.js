//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course)
{
  for(let num of student.transcript)
  { 
    if(num.course === course)
    {
      let sum = 0;
      for(let grade of num.grades)
      {
        sum += grade;
      }
      return sum/num.grades.length;
    }
  }
  return -1;
}

function getAssignmentMark(student, course, num)
{
  for(let record of student.transcript)
  {
    if(record.course === course)
    {
      return record.grades[num - 1];
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment)
{
  let sum = 0;
  let num = 0;
  for(let records of students)
  {
    if(getAssignmentMark(records, courseName, assignment) !== -1)
    {
      num++;
      sum += getAssignmentMark(records, courseName, assignment);
    }
  }
  return sum/num;
}


console.log(getAverageGrade(paul, 'INFO 1600'));
console.log(getAssignmentMark(paul, 'INFO 1600', 1));
console.log(averageAssessment(students, 'INFO 1601', 1));
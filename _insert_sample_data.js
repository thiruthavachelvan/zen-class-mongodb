use("zen_class_programme");

db.users.insertMany([
{
    user_id: 1,
    name: "Thiru",
    email: "thiru@email.com",
    mentor_id: 101
},
{
    user_id: 2,
    name: "Arjun",
    email: "arjun@email.com",
    mentor_id: 101
},
{
    user_id: 3,
    name: "Priya",
    email: "priya@email.com",
    mentor_id: 102
}
]);


db.codekata.insertMany([
{
    user_id: 1,
    problems_solved: 50
},
{
    user_id: 2,
    problems_solved: 75
},
{
    user_id: 3,
    problems_solved: 30
}
]);


db.attendance.insertMany([
{
    user_id: 1,
    date: new Date("2020-10-16"),
    status: "Absent",
    task_submitted: false
},
{
    user_id: 2,
    date: new Date("2020-10-20"),
    status: "Present",
    task_submitted: true
},
{
    user_id: 3,
    date: new Date("2020-10-25"),
    status: "Absent",
    task_submitted: false
}
]);


db.topics.insertMany([
{
    topic: "MongoDB",
    date: new Date("2020-10-10")
},
{
    topic: "NodeJS",
    date: new Date("2020-10-15")
},
{
    topic: "React",
    date: new Date("2020-11-05")
}
]);


db.tasks.insertMany([
{
    task: "MongoDB Task",
    date: new Date("2020-10-18")
},
{
    task: "NodeJS Task",
    date: new Date("2020-10-22")
}
]);


db.company_drives.insertMany([
{
    company: "TCS",
    date: new Date("2020-10-18"),
    students: [1,2]
},
{
    company: "Infosys",
    date: new Date("2020-10-30"),
    students: [2,3]
},
{
    company: "Google",
    date: new Date("2020-11-10"),
    students: [1]
}
]);


db.mentors.insertMany([
{
    mentor_id: 101,
    name: "Mentor A",
    mentee_count: 20
},
{
    mentor_id: 102,
    name: "Mentor B",
    mentee_count: 10
}
]);

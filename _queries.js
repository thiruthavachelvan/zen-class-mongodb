use("zen_class_programme");



db.topics.find({
date: {
$gte: new Date("2020-10-01"),
$lte: new Date("2020-10-31")
}
});

db.tasks.find({
date: {
$gte: new Date("2020-10-01"),
$lte: new Date("2020-10-31")
}
});



db.company_drives.find({
date: {
$gte: new Date("2020-10-15"),
$lte: new Date("2020-10-31")
}
});



db.company_drives.aggregate([
{
$lookup: {
from: "users",
localField: "students",
foreignField: "user_id",
as: "students_details"
}
}
]);



db.codekata.find({}, {
user_id: 1,
problems_solved: 1
});



db.mentors.find({
mentee_count: {
$gt: 15
}
});



db.attendance.find({
date: {
$gte: new Date("2020-10-15"),
$lte: new Date("2020-10-31")
},
status: "Absent",
task_submitted: false
});

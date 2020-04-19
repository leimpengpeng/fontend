const db = require('./db')
const Query = {
    greeting: () => "Hello graphQL",
    sayHello:(root,args,context,info) => `Hi ${args.name} GraphQL server`,
    students:() => db.students.list(),
    greetingWithAuth:(root,args,content,info) => {
        if(!content.user) {
            throw new Error('Unauthorized');
        }
        return "Hello from TutorialsPoint, welcome back : "+content.user.firstName;
    }
}

const Student = {
    college:(root) => {
       return db.colleges.get(root.collegeId);
    }
 }
module.exports = {Query, Student}
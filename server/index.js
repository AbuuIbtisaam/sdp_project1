const express = require('express')
const StudentSchema = require('./models/Users')
const model = require('./models/Students')
const Staff = require('./models/Staff')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { authUser } = require('./basicAuth')


const app = express()
const port = 4321

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://team3:1234@ac-ozctmkt-shard-00-00.4cnkqs7.mongodb.net:27017,ac-ozctmkt-shard-00-01.4cnkqs7.mongodb.net:27017,ac-ozctmkt-shard-00-02.4cnkqs7.mongodb.net:27017/ERP?ssl=true&replicaSet=atlas-jpk2cl-shard-0&authSource=admin&retryWrites=true&w=majority')
mongoose.connection.once("open", () => console.log('Database connected!'))

app.get('/', (req, res) => res.send('Home page'))

app.get('/Dashboard', authUser, (req, res) => res.send('Dashboard page'))

app.post("/newUser",async(req,res)=>{
    const email=req.body.Email;
    const role=req.body.Role;
   // const studPass=req.body.studPass;
    const newPassword = await bcrypt.hash(req.body.Password, 10)
    const user=new StudentSchema({Email:email, Password:newPassword, Role:role});
    try{
    await user.save();
    res.send("Inserted Values");        
    console.log(email,newPassword,role);
}
    

catch(err){
    console.log(err);
}});

app.post('/login', async(req, res) => {
    console.log(req.body)
    const user = await StudentSchema.findOne({
            Email: req.body.email,
            //password: req.body.password,
            
        })

        if (!user) {
            return res.json({status: 'error', error: 'Wrong Email!!!'})            
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.Password)
        if (isPasswordValid) {
            const token = jwt.sign(
                {
                    Email: user.Email,
                    Role: user.Role,
                },
                'secret123'
            )

            return res.json({status: 'OK', user: token})
        }else{
            return res.json({status: 'error', error: "Wrong password"})
        }

    })
//Create or Insert
app.post("/new/student/", (req, res) => {
    const studentsData = req.body;
    model.create(studentsData, (err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data)
    })
})

app.post("/new/staff/", (req, res) => {
    const staffData = req.body;
    Staff.create(staffData, (err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data)
    })
})

//Read or View
app.get("/get/students/", (req, res) => {
    model.find((err,data) => {
        err ? res.status(500).send(err) : res.status(201).send(data);
    })
})

app.get("/get/staff/", (req, res) => {
    Staff.find((err,data) => {
        err ? res.status(500).send(err) : res.status(201).send(data);
    })
})

//update
app.patch("/upadate/student/:id", async (req, res) => {
    const { id } = req.params;
const { fName, lName, rollNumber, studClass,  Section,fatherName, motherName, MobileNo1, MobileNo2 } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    const updatedStudent = { fName, lName, rollNumber, studClass,  Section,fatherName, motherName, MobileNo1, MobileNo2, _id: id };

    await model.findByIdAndUpdate(id, updatedStudent, { new: true });

    res.json(updatedStudent);
})

app.patch("/upadate/staff/:id", async (req, res) => {
    const { id } = req.params;
const { fName, lName, staffId, MobileNo1, MobileNo2 } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No staff with id: ${id}`);

    const updatedStudent = { fName, lName, staffId, MobileNo1, MobileNo2, _id: id };

    await Staff.findByIdAndUpdate(id, updatedStaff, { new: true });

    res.json(updatedStaff);
})

//delete
app.delete("/delete/student/:id", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Student with id: ${id}`);

    await model.findByIdAndRemove(id);

    res.json({ message: "Student deleted successfully." });
})

app.delete("/delete/staff/:id", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Staff with id: ${id}`);

    await Staff.findByIdAndRemove(id);

    res.json({ message: "Staff deleted successfully." });
})
app.listen(port, () => console.log(`Server started on port: ${port}`))


//NOTE: npm i bcryptjs this package will help to secure password in the database like SHA1 in mysql
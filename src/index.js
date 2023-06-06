/* eslint linebreak-style: ["error", "windows"] */
const mongo = require('mongoose');
const app = require('./server');

const uri = 'mongodb+srv://moyalshoham:xjShq9cFspKGRrAr@devops-project.xq5lkah.mongodb.net/DevopsDB?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongo.connect(uri);
    } catch (error) {
        console.error('Error connecting to URI: ', error);
    }
}

connect();

const grade_schema = new mongo.Schema({
    full_name: String,
    grade1: Number,
    grade2: Number,
    grade3: Number,
});

const Grades = mongo.model('Students', grade_schema); // Use 'Students' as the model name

app.post('/submit-form', async (req, res) => {
    let {
        full_name, grade1, grade2, grade3,
    } = req.body;
    console.log(full_name);
    const student = new Grades({
        full_name,
        grade1,
        grade2,
        grade3,
    });

    try {
        await student.save(); // Save the student instance
        res.redirect('/');
    } catch (err) {
        console.error('Error saving grades to database:', err);
        res.sendStatus(500);
    }
});

app.get('/get-grades', async (req, res) => {
    try {
        const grades = await Grades.find({}, { _id: 0, __v: 0 }).exec();
        res.json(grades);
    } catch (e) {
        console.error('Error retrieving grades:', e);
        res.sendStatus(500);
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is online now - localhost:${port}/`);
});

module.exports = app;
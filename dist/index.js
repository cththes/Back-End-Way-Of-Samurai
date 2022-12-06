"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
const db = {
    courses: [
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'automation qa' },
        { id: 4, title: 'devops' }
    ]
};
app.get('/courses', (req, res) => {
    let foundCourses = db.courses;
    if (req.query.title) {
        foundCourses = foundCourses
            .filter(c => c.title.indexOf(req.query.title) > -1);
    }
    if (!foundCourses.length) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourses);
});
app.get('/courses:id', (req, res) => {
    res.json(db.courses.find(c => c.id === +req.params.id));
    if (!db.courses) {
        res.sendStatus(404);
        return;
    }
    res.json(db.courses);
});
app.post('/courses', (req, res) => {
    const createdCourse = {
        id: +(new Date()),
        title: req.body.title
    };
    db.courses.push(createdCourse);
    res.json(createdCourse);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

import shortid from 'shortid';
import _ from 'lodash';
import faker from 'faker';
import mongoose from 'mongoose';
import UserModel from './api/users/model';
// import {dbModel} from './api/users/config';

const users = _.times(5).map(val => {
    return {
        email: faker.internet.email(),
        id: shortid.generate(),
        name: faker.name.firstName(),
        hashPassword: faker.random.uuid()
    }
});
// UserModel.insertMany(users).then(res => console.log('res', res));
// const saveManyByModel = (model, arr) => model.insertMany(arr).then(res => res);
function insert() {
    const Models = Object.keys(mongoose.modelSchemas);
    // console.log('mongoose', Object.keys(mongoose.modelSchemas));
    // const schemaKeys = Object.keys(mongoose.modelSchemas[Models[0]]);
    console.log('mongoose.modelSchemas[Models[0]]', mongoose.modelSchemas[Models[0]]);
    console.log('mongoose.modelSchemas[Models[0]]', mongoose.modelSchemas[Models[0]].paths.id);
    //
    // console.log('schemaKeys', schemaKeys);

    // console.log('mongoose.connection', mongoose.connection);

    // return UserModel.insertMany(users);
}

insert();
// insert().then(res => {
//     UserModel.find({}).then(response => {
//         console.log('response', response);
//     })
// });
// const handleUsers = (res) => res.length ? res : saveManyByModel(UserModel, users);

// const handleResults = (res) => ResultModel.find().then(response => {
//     if (!response.length) {
//         let {quizzes} = res;
//         quizzes.forEach((quiz, i) => {
//             let newQ = new ResultModel({
//                 quiz_id: quiz._id,
//                 user_id: res.userIds[i].id,
//                 answer_id: quiz.answers[i]._id
//             });
//             newQ.save(function (err, doc) {
//                 if (err) {
//                     console.log('err', err);
//                 }
//             });
//         });
//     }
// });

// const handleQuizzes = (userIds) => QuizModel.find().then(res => res.length ? {
//         quizzes: res,
//         userIds
//     } : saveManyByModel(QuizModel, quizzes).then(response => ({
//         quizzes: response,
//         userIds,
//     }))
// );


// const handleMock = () => UserModel.find({})
//     .then(handleUsers)
//     .then(handleQuizzes)
//     .then(handleResults);
//
//
// handleMock();
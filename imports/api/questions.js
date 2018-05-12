import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

// Meteor.methods({
//  "questions.handleChange"(points){
//     Questions.update(questions._id,{
//         $set: {points : points + 1}
//     })
//  }
// })

// Meteor.methods({
//     "todos.addToDo"(newTodo) {
//       ToDos.insert(newTodo);
//     },
//     "todos.toggleComplete"(todo) {
//       ToDos.update(todo._id, {
//         $set: { complete: !todo.complete }
//       });
//     },
//     "todos.removeTodo"(todo) {
//       ToDos.remove({ _id: todo._id });
//     },
//     "todos.clearCompleted"(todo) {
//       ToDos.remove({ _id: todo._id });
//     }
//   });

//   if (Meteor.isServer) {
//     Meteor.publish("questions", function questionsPublication() {
//       return ToDos.find({ owner: this.userId });
//     });
//   }

export const ToDos = new Mongo.Collection("questions");

import { Mongo } from 'meteor/mongo';

// Create new collection to store tasks
export const TasksCollection = new Mongo.Collection('tasks');

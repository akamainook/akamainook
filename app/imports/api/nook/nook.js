import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Nooks = new Mongo.Collection('Nooks');

/** Create a schema to constrain the structure of documents associated with this collection. */
const NookSchema = new SimpleSchema({
  nookName: { type: String, required: true },
  address: { type: String, required: true },
  images: { type: Array },
  'images.$': { type: String },
  description: { type: String, required: true },
  startHour: {
    type: String,
    required: true,
    allowedValues: [
      '12:00AM', '12:30AM', '1:00AM', '1:30AM', '2:00AM', '2:30AM', '3:30AM',
      '4:30AM', '5:00AM', '5:30AM', '6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM',
      '9:00AM', '9:30AM', '10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM', '12:30PM',
      '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:30PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM',
      '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM', '10:30PM',
<<<<<<< HEAD
<<<<<<< HEAD
      '11:00PM', '11:30PM', 'All Hours'],
=======
      '11:00PM', '11:30PM', '24 Hours'],
>>>>>>> parent of b003028... Merge branch 'issue-42'
=======
      '11:00PM', '11:30PM'],
>>>>>>> parent of 0a72d98... Added All 10 Default Accounts to json file.
    defaultValue: '8:00AM',
  },
  endHour: {
    type: String,
    required: true,
    allowedValues: [
      '12:00AM', '12:30AM', '1:00AM', '1:30AM', '2:00AM', '2:30AM', '3:30AM',
      '4:30AM', '5:00AM', '5:30AM', '6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM',
      '9:00AM', '9:30AM', '10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM', '12:30PM',
      '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:30PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM',
      '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM', '10:30PM',
<<<<<<< HEAD
<<<<<<< HEAD
      '11:00PM', '11:30PM', 'All Hours'],
=======
      '11:00PM', '11:30PM', '24 Hours'],
>>>>>>> parent of b003028... Merge branch 'issue-42'
=======
      '11:00PM', '11:30PM'],
>>>>>>> parent of 0a72d98... Added All 10 Default Accounts to json file.
    defaultValue: '8:00PM',
  },
  owner: { type: String, required: true },
  webLink: String,
  tags: { type: Array, required: true },
  'tags.$': { type: String },
  approved: Boolean,
}, { requiredByDefault: false }, { tracker: Tracker });

/** Attach this schema to the collection. */
Nooks.attachSchema(NookSchema);

/** Make the collection and schema available to other code. */
export { Nooks, NookSchema };

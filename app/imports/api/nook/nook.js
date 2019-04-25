import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Nooks = new Mongo.Collection('Nooks');

/** Create a schema to constrain the structure of documents associated with this collection. */
const NookSchema = new SimpleSchema({
  nookName: String,
  address: String,
  images: String,
  description: String,
  startHour: {
    type: String,
    allowedValues: ['12:00AM', '12:30AM', '1:00AM', '1:30AM', '2:00AM', '2:30AM', '3:30AM', '4:30AM', '5:00AM', '5:30AM', '6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM', '12:30PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:30PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM', '10:30PM', '11:00PM', '11:30PM' ],
    defaultValue: '8:00AM',
  },
  endHour: {
    type: String,
    allowedValues: ['12:00AM', '12:30AM', '1:00AM', '1:30AM', '2:00AM', '2:30AM', '3:30AM', '4:30AM', '5:00AM', '5:30AM', '6:00AM', '6:30AM', '7:00AM', '7:30AM', '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM', '11:00AM', '11:30AM', '12:00PM', '12:30PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:30PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM', '10:30PM', '11:00PM', '11:30PM' ],
    defaultValue: '8:00AM',
  },
  owner: String,
<<<<<<< HEAD
  webLink: String,
  tags: String,
=======
  tags: Array,
  approved: false,
>>>>>>> bb7737382788f55029b5509853fc169dccc78082
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Nooks.attachSchema(NookSchema);

/** Make the collection and schema available to other code. */
export { Nooks, NookSchema };

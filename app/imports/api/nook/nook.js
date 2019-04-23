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
  startHour: SimpleSchema.oneOf(String, Number),
  endHour: SimpleSchema.oneOf(String, Number),
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

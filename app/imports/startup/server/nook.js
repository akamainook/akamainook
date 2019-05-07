import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Nooks } from '../../api/nook/nook.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Nooks.insert(data);
}

/** Initialize the collection if empty. */
if (Nooks.find().count() === 0) {
<<<<<<< HEAD
  if (Meteor.settings.defaultData) {
=======
  if (Meteor.settings.defaultNooks) {
>>>>>>> parent of d2e1565... Fixed ESLint Errors
    console.log('Creating default data.');
    Meteor.settings.defaultNooks.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with anyone */
Meteor.publish('Nooks', function publish() {
    return Nooks.find();
});

Meteor.publish('ProfileNooks', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Nooks.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('NookAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Nooks.find();
  }
  return this.ready();
});

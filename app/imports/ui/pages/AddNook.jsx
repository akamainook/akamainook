import React from 'react';
import { Nooks, NookSchema } from '/imports/api/nook/nook';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
// import NumField from 'uniforms-semantic/NumField';
// import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddNook extends React.Component {

  /** Bind 'this' so that a ref to the AddNook form can be saved and communicated between render() and submit() */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify user results of AddNook. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** Insert the data when clicked */
  submit(data) {
    const { nookName, address, images, description, startHour, endHour, tags } = data;
    const owner = Meteor.user().username;
    const approved = false;
    Nooks.insert({
      nookName, address, images, description, startHour, endHour,
      owner, tags, approved,
    }, this.insertCallback());
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Nook</Header>
            <AutoForm ref={(ref) => {
              this.formRef = ref;
            }} schema={NookSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='Name'/>
                <TextField name='Description'/>
                <TextField name='Images'/>
                <TextField name='hours'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddNook;

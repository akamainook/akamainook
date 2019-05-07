import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import { Container, Form, Grid, Header, Segment, Checkbox, Image } from 'semantic-ui-react';
/* import { Redirect } from 'react-router-dom';
import PropType from 'prop-types'; */
/* import { Accounts } from 'meteor/accounts-base';
import { Auth } from 'aws-amplify'; */

/** Code inspired by https://serverless-stack.com/chapters/allow-users-to-change-passwords.html */
export default class EditProfile extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { oldPassword: '', newPassword: '', confirmPassword: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleChange = (e, { value }) => {
    this.setState({ image: value });
  };

  /** Handles submit of the profile icons */
  handleSubmit() {
    const image = this.state;
    Meteor.users.update({ _id: Meteor.userId() }, { $set: { profile: image } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  handleChange2 = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  /** Handles submit of the password change form */
  handleSubmit2() {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    if (newPassword !== confirmPassword || newPassword === '' || oldPassword === '') {
      Bert.alert({ type: 'danger', message: 'New passwords does not match' });
    } else {
      Accounts.changePassword(oldPassword, newPassword, Bert.alert({ type: 'success', message: 'Password Changed' }));
    }
  }

  /** Display the Edit profile form. */
  render() {
    return (
        <div className="profileCss">
          <Container>
            <Grid textAlign="center" verticalAlign="middle" centered>
              <Header as="h2" textAlign="center">
                Edit your profile
              </Header>
              <Grid.Row>
                <Header as='h2'>
                  <Header.Content>
                    Change your icon
                    <Header.Subheader>
                      Images provided by FreePik from https://www.freepik.com/
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Form onSubmit={this.handleSubmit}>
                  <Grid columns={5}>
                    <Grid.Column>
                      <Image src="cat.png"/>
                      <Form.Field>
                        <Checkbox
                            radio
                            name="checkboxRadioGroup"
                            value="cat.png"
                            checked={this.state.image === 'cat.png'}
                            onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="dog.png"/>
                      <Form.Field>
                        <Checkbox
                            radio
                            name="checkboxRadioGroup"
                            value="dog.png"
                            checked={this.state.image === 'dog.png'}
                            onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="girl.png"/>
                      <Form.Field>
                        <Checkbox
                            radio
                            name="checkboxRadioGroup"
                            value="girl.png"
                            checked={this.state.image === 'girl.png'}
                            onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="boy.png"/>
                      <Form.Field>
                        <Checkbox
                            radio
                            name="checkboxRadioGroup"
                            value="boy.png"
                            checked={this.state.image === 'boy.png'}
                            onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="star.png"/>
                      <Form.Field>
                        <Checkbox
                            radio
                            name="checkboxRadioGroup"
                            value="star.png"
                            checked={this.state.image === 'star.png'}
                            onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid>
                  <Form.Button
                      type="submit"
                      content="Submit"/>
                </Form>
              </Grid.Row>
              <Grid.Row>
                <Header as="h2">Change Password</Header>
              </Grid.Row>
              <Grid.Row>
                <Form onSubmit={this.handleSubmit2}>
                  <Segment stacked>
                    <Form.Input
                        name="oldPassword"
                        type="password"
                        placeholder="Old password"
                        onChange={this.handleChange2}
                    />
                    <Form.Input
                        name="newPassword"
                        type="password"
                        placeholder="New Password"
                        onChange={this.handleChange2}
                    />
                    <Form.Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={this.handleChange2}
                    />
                    <Form.Button
                        type="submit"
                        content="Submit"/>
                  </Segment>
                </Form>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

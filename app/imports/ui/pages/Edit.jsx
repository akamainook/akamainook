import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Auth } from 'aws-amplify';
import { Container, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react';


/**Code inspired by https://serverless-stack.com/chapters/allow-users-to-change-passwords.html **/
export default class Edit extends React.Component {

  /** Initialize component state with properties for login and redirection. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signin submission using Meteor's account mechanism. */
  handleSubmit() {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    Meteor.changePassword(oldPassword, newPassword, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else if(oldPassword !== newPassword) {
        this.setState({error: err.reason })
      }else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  validateForm() {
    return (
        this.state.oldPassword.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
    );
  }

  /** Display the Edit profile form. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered rows={2}>
            <Header as="h2" textAlign="center">
              Edit your profile
            </Header>
            <Grid.Row>
              <Header>Change your icon</Header>
              <p id="credit2">Images provided by FreePik from https://www.freepik.com/</p>
              <Grid columns={5}>
                <Form>
                <Grid.column>
                  <image src="cat.png"/>
                </Grid.column>
                <Grid.Column>
                  <image src="dog.png"/>
                </Grid.Column>
                <Grid.Column>
                  <image src="girl.png"/>
                </Grid.Column>
                <Grid.Column>
                  <image src="boy.png"/>
                </Grid.Column>
                <Grid.Column>
                  <image src="star.png"/>
                </Grid.Column>
                </Form>
              </Grid>
            </Grid.Row>
            <Grid.Row>

              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Header>{Meteor.user().emails[0].address}</Header>
                  <Form.Input
                      label="Change Password"
                      name="oldPassword"
                      ref="oldPassword"
                      type="password"
                      placeholder="Old password"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      name="password"
                      type ="password"
                      placeholder="New Password"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      name="confirmPassword"
                      type ="password"
                      placeholder="Confirm Password"
                      onChange={this.handleChange}
                  />
                  <Form.Button
                      type="submit"
                      content="Submit"/>
                </Segment>
              </Form>
            {this.state.error === '' ? (
                ''
            ) : (
                <Message
                    error
                    header="Password change was not successful"
                    content={this.state.error}
                />
            )}
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

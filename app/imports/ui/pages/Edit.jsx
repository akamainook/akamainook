import React from 'react';
import { Auth } from 'aws-amplify';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

/**Code inspired by https://serverless-stack.com/chapters/allow-users-to-change-passwords.html **/
export default class Edit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      oldPassword: "",
      isChanging: false,
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
        this.state.oldPassword.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isChanging: true });

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
          currentUser,
          this.state.oldPassword,
          this.state.password
      );

      this.props.history.push("/profile");
    } catch (e) {
      alert(e.message);
      this.setState({ isChanging: false});
    }
  };

  /** Display the Edit profile form. */
  render() {
    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Edit your profile
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Header>Email goes here</Header>
                  <Form.Input
                      label="Change Password"
                      name="oldPassword"
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
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

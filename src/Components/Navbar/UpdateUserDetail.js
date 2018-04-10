import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../Actions/User';

import { Collapse } from 'react-collapse';
import BloomerField from '../Login/BloomerField';
import {
  Modal,
  ModalBackground,
  ModalContent,
  Box,
  Subtitle,
  Columns,
  Column,
  Control,
  Button,
  Field as FieldBloom,
  Content,
  Notification,
  Icon,
  Label
} from 'bloomer';

const validate = values => {
  const errors = {};

  if (!values.username) {
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.password) {
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }

  return errors;
};

const fields = [
  {
    name: 'username',
    type: 'text',
    heading: 'Username',
    icon: 'fa fa-user'
  },
  {
    name: 'email',
    type: 'email',
    heading: 'Your e-mail',
    icon: 'fa fa-at'
  },
  {
    name: 'password',
    type: 'password',
    heading: 'Update your password',
    icon: 'fa fa-key'
  }
];

class UpdateUserDetail extends Component {
  constructor() {
    super();
    this.state = {
      isCollapseOpen: false,
      result: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  handleSubmit(values) {
    values.id = this.props.user.id;
    this.props.updateDetails(values);
  }

  toggleCollapse() {
    this.setState({ isCollapseOpen: !this.state.isCollapseOpen });
  }

  deleteAccount() {
    this.props.deleteAccount(this.props.user.id);
  }

  render() {
    const { isActive } = this.props;
    let i = 0;

    let updateResult = this.props.updateResult
      ? this.props.updateResult
      : false;
    fields[0].placeholder = this.props.user ? this.props.user.username : false;
    fields[1].placeholder = this.props.user ? this.props.user.email : false;

    return (
      <Modal isActive={isActive}>
        <ModalBackground />
        <ModalContent style={{ width: '400px' }}>
          <Box>
            <Columns>
              <Column>
                <Content hasTextAlign="centered">
                  <Subtitle>Update your details</Subtitle>
                  {updateResult ? (
                    updateResult.code >= 200 && updateResult.code < 300 ? (
                      <Notification isColor="success">
                        {updateResult.response}
                        &nbsp;<i className="fas fa-check" />{' '}
                      </Notification>
                    ) : (
                      <Notification isColor="danger">
                        Something went wrong, please try again later &nbsp;<i className="fas fa-times" />{' '}
                      </Notification>
                    )
                  ) : (
                    <Notification isColor="info">
                      Edit just the relevant values
                    </Notification>
                  )}
                </Content>
                <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                  {fields.map(field => (
                    <Field
                      key={i++}
                      placeholder={field.placeholder ? field.placeholder : null}
                      name={field.name}
                      type={field.type}
                      component={BloomerField}
                      heading={field.heading}
                      icon={field.icon}
                    />
                  ))}
                  <Label
                    style={{ cursor: 'pointer' }}
                    hasTextAlign="centered"
                    onClick={this.toggleCollapse}
                  >
                    More <Icon icon="angle-down" isSize="small" />
                  </Label>
                  <Collapse isOpened={this.state.isCollapseOpen}>
                    <Button
                      isFullWidth
                      isColor="danger"
                      onClick={this.deleteAccount}
                    >
                      Delete Account
                    </Button>
                  </Collapse>
                  <br />
                  <FieldBloom isGrouped>
                    <Column>
                      <Control>
                        <Button type="submit" isFullWidth isColor="info">
                          Update
                        </Button>
                      </Control>
                    </Column>
                    <Column>
                      <Control>
                        <Button
                          isFullWidth
                          isColor="dark"
                          onClick={() => this.props.closeModal()}
                        >
                          Cancel
                        </Button>
                      </Control>
                    </Column>
                  </FieldBloom>
                </Form>
              </Column>
            </Columns>
          </Box>
        </ModalContent>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    updateResult: state.user.updateResult
  };
}

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'update',
    validate
  })(UpdateUserDetail)
);

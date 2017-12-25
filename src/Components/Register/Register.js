import React, { Component } from 'react';
// Components
import { HeroBody,Title, Container, Columns, Column } from 'bloomer';
import RegisterForm from './RegisterForm';

class Register extends Component {

  render() {
    return (
	<HeroBody>
		<Container>
			<Columns>
				<Column isSize={{ mobile: 'full', desktop: 4 }}>
					<Title isSize={3}>Create an account</Title>

				{ /* RegisterForm component, passing parameters depending on the kind of registration? */ }

					<RegisterForm />

				</Column>
				<Column isSize={{ desktop: 4 }} isHidden='mobile'>

				</Column>
				<Column isSize={{ desktop: 4 }} isHidden='mobile'>

				</Column>
			</Columns>
		</Container>
	</HeroBody>
    );
  }
}

export default Register;

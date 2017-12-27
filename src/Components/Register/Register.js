import React, { Component } from 'react';
// Components
import { HeroBody, Title, Subtitle, Container, Columns, Column, Image } from 'bloomer';
import RegisterForm from './RegisterForm';

import s8 from '../../Assets/img/s8-render.png';
import gplay from '../../Assets/img/googleplay.png';

const s8position = {
	'width': '70%'
}

const playpositon = {
	'bottom' : '70px',
	'left' : '50px'
}

class Register extends Component {

  render() {
    return (
	<HeroBody style={{ 'alignItems' : 'initial' }}>
		<Container>
			<Columns isMultiline>
				<Column isSize={{ mobile: 'full', desktop: 'full' }} isOffset={{ 'desktop' : 2}}>
					<Title isSize={3}>Keep your purchase receipts organised</Title>
					<Subtitle isSize={6} style={{'marginTop' : '10px' }}> reptceipts helps you organise, manage and redeem your purchase receipts </Subtitle>
				</Column>
				<Column isSize={{ mobile: 'full', desktop: 6 }} isOffset={{ 'desktop' : 2}}>
					<RegisterForm />
				</Column>
			</Columns>
		</Container>
		<Container>
			<Columns>
				<Column isSize={{ desktop : 9 }} isOffset={{ 'desktop' : 3 }}>
					<Image src={s8} style={s8position} />
				</Column>
			</Columns>
		</Container>
	</HeroBody>
    );
  }
}

export default Register;

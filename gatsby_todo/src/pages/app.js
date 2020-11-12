import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';
import { Container, Heading, Button, Flex, NavLink } from 'theme-ui';

// import netlifyIdentity from 'netlify-identity-widget'
import { IdentityContext } from '../../indentity-context';

//Working Zone
let Dash = () => {
	const { user } = useContext(IdentityContext);

	return (
		<Container>
            <Flex as="nav">
				<NavLink as={Link} to="/" p={2} m={2}>
					Home
				</NavLink>
				<NavLink as={Link} to="/app" p={2} m={2}>
					Dashboard
				</NavLink>
				<NavLink href="#!" p={2} m={2} sx={{ marginLeft: 'auto' }}>
					{user && `Welcome, ${user.user_metadata.full_name}`}
				</NavLink>
			</Flex>
			<div>Current User: {user && user.user_metadata.full_name}</div>
		</Container>
	);
};

let DashLoggedOut = () => {
	const { user, identity: netlifyIdentity } = useContext(IdentityContext);

	return (
		<Container>
			<Flex as="nav">
				<NavLink as={Link} to="/" p={2} m={2}>
					Home
				</NavLink>
				<NavLink as={Link} to="/app" p={2} m={2}>
					Dashboard
				</NavLink>
				<NavLink href="#!" p={2} m={2} sx={{ marginLeft: 'auto' }}>
					{user && `Welcome, ${user.user_metadata.full_name}`}
				</NavLink>
			</Flex>
			<Flex sx={{ flexDirection: 'column', padding: 3 }}>
				<Heading as="h1">Get stuff Done!</Heading>
				<Button sx={{ margin: 2, cursor: 'pointer' }} onClick={() => netlifyIdentity.open()}>
					Login
				</Button>
			</Flex>
		</Container>
	);
};

//Router
export default (props) => {
	const { user } = useContext(IdentityContext);

	if (!user) {
		return (
			<Router>
				{/* <Dash path="/app" /> */}
				<DashLoggedOut path="/app" />
			</Router>
		);
	} else {
		return (
			<Router>
				<Dash path="/app" />
			</Router>
		);
	}
};

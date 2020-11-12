import React, { useContext } from 'react';
import { Link } from 'gatsby';

//Theme-UI
import { Container, Heading, Button, Flex, NavLink } from 'theme-ui';

//importing netlifyIdentity
// import netlifyIdentity from 'netlify-identity-widget';

import { IdentityContext } from '../../indentity-context';

const Home = () => {
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
				<Heading as="h1">Theme-ui Container and theme checking !!</Heading>
				<Button sx={{ margin: 2, cursor: 'pointer' }} onClick={() => netlifyIdentity.open()}>
					Login
				</Button>
			</Flex>
		</Container>
	);
};

export default Home;

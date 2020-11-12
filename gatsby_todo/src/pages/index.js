import React from 'react';

//Theme-UI
import { Container, Heading, Button, Flex } from 'theme-ui';

//importing netlifyIdentity
import netlifyIdentity from 'netlify-identity-widget'

//Initializing netlifyidentity
netlifyIdentity.init({});

export default function Home() {
	return (
		<Container>
			<Flex sx={{ flexDirection: 'column', padding: 3 }}>
				<Heading as="h1">Theme-ui Container and theme checking !!</Heading>
				<Button sx={{ margin: 2 }} onClick={() => netlifyIdentity.open()}>
					Add Task
				</Button>
			</Flex>
		</Container>
	);
}

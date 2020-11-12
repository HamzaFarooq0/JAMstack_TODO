import React, { useEffect } from 'react';

//Theme-UI
import { Container, Heading, Button, Flex } from 'theme-ui';

//importing netlifyIdentity
import netlifyIdentity from 'netlify-identity-widget'


export default function Home() {
	//Initializing netlifyidentity
	/* 
	we're using useEffect so it won't run on server instead on browser coz server don't allow
	us to use identity widget on server side. 
	*/
	useEffect(() => {
		netlifyIdentity.init({});
	})
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

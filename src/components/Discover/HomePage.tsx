import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import SearchGooglePlaces from './SearchGooglePlaces';
import { ReactComponent as Globe } from '../../assets/globe.svg';

function HomePage() {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Box
				sx={{
					width: '100vw',
					height: '0vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '4vh',
					// overflow: 'hidden',
					// backgroundColor: 'black',
				}}
			>
				{/* <img

				src="globe.gif"
				alt="globe"
				style={{ position: 'absolute', width: '100vw', height: '100vh' }}
			/> */}
				<Typography variant="h3" style={{ zIndex: 2, margin: '33vh 0 0 0' }}>
					Where do you want to go?
				</Typography>
				{/* <div style={{ zIndex: 2, color: 'white', margin: '30vh 0 0 0' }}></div> */}
				<SearchGooglePlaces />
			</Box>
			<div style={{ filter: 'blur(10px)' }}>
				<Globe />
			</div>
		</div>
	);
}

export default HomePage;

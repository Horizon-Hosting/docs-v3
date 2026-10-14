import { createImageResponse } from '@takumi-rs/image-response';
import { loadGoogleFont, loadLocalFont } from './fonts';

export const ogImageResponse = createImageResponse({
	fonts: [
		{ name: 'Poppins', weight: 700, data: () => loadGoogleFont('Poppins', 700) },
		{ name: 'Poppins', weight: 600, data: () => loadGoogleFont('Poppins', 600) },
		{ name: 'Poppins', weight: 500, data: () => loadGoogleFont('Poppins', 500) },
		{ name: 'Inter', weight: 400, data: () => loadGoogleFont('Inter', 400) },
		{ name: 'Inter', weight: 600, data: () => loadGoogleFont('Inter', 600) },
		{ name: '0xProto', weight: 400, data: () => loadLocalFont('fonts/0xProto-Regular.woff2') },
		{ name: '0xProto', weight: 700, data: () => loadLocalFont('fonts/0xProto-Bold.woff2') },
	],
});

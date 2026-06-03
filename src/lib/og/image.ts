import { createImageResponse } from '@takumi-rs/image-response';
import { loadGoogleFont, loadLocalFont } from './fonts';

export const ogImageResponse = createImageResponse({
	fonts: [
		{ name: 'Space Grotesk', weight: 700, data: () => loadGoogleFont('Space Grotesk', 700) },
		{ name: 'Space Grotesk', weight: 600, data: () => loadGoogleFont('Space Grotesk', 600) },
		{ name: 'Space Grotesk', weight: 500, data: () => loadGoogleFont('Space Grotesk', 500) },
		{ name: 'Hanken Grotesk', weight: 400, data: () => loadGoogleFont('Hanken Grotesk', 400) },
		{ name: 'Hanken Grotesk', weight: 600, data: () => loadGoogleFont('Hanken Grotesk', 600) },
		{ name: '0xProto', weight: 400, data: () => loadLocalFont('fonts/0xProto-Regular.woff2') },
		{ name: '0xProto', weight: 700, data: () => loadLocalFont('fonts/0xProto-Bold.woff2') },
	],
});

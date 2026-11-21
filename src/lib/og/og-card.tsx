import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const LOGO_SVG = readFileSync(join(process.cwd(), 'public/logos/logo_dark.svg'), 'utf-8');
const LOGO_URI = `data:image/svg+xml,${encodeURIComponent(LOGO_SVG)}`;

const STARS: [number, number, number, number, string][] = [
	[7, 18, 2, 0.7, '#FFFFFF'], [14, 62, 1.5, 0.5, '#FFC94D'], [21, 33, 2, 0.6, '#FFFFFF'], [27, 78, 1.5, 0.4, '#FF9BA5'],
	[33, 12, 2.5, 0.8, '#FFFFFF'], [38, 49, 1.5, 0.45, '#FFFFFF'], [44, 84, 2, 0.6, '#FFC94D'], [51, 24, 1.5, 0.5, '#FFFFFF'],
	[58, 70, 2, 0.55, '#FF9BA5'], [63, 40, 1.5, 0.4, '#FFFFFF'], [69, 15, 2, 0.65, '#FFFFFF'], [74, 88, 1.5, 0.5, '#FFC94D'],
	[80, 55, 2.5, 0.7, '#FFFFFF'], [86, 30, 1.5, 0.45, '#FF9BA5'], [91, 72, 2, 0.6, '#FFFFFF'], [95, 46, 1.5, 0.4, '#FFFFFF'],
	[4, 46, 1.5, 0.4, '#FFFFFF'], [18, 90, 2, 0.55, '#FFFFFF'], [47, 8, 1.5, 0.5, '#FFC94D'], [66, 60, 1.5, 0.4, '#FFFFFF'],
	[11, 76, 1.5, 0.45, '#FF9BA5'], [55, 92, 2, 0.5, '#FFFFFF'], [88, 12, 1.5, 0.5, '#FFFFFF'], [30, 58, 1.5, 0.4, '#FFFFFF'],
];

export interface OgCardProps {
	title: string;
	description?: string;
	url?: string;
}
export function OgCard({
	title,
	description,
	url = 'hrzn.link/docs',
}: OgCardProps) {
	return (
		<div style={{
			position: 'relative',
			width: '1200px',
			height: '630px',
			display: 'flex',
			backgroundColor: '#07080C',
			fontFamily: 'Inter',
			overflow: 'hidden',
		}}>
			<div style={{
				position: 'absolute', top: 0, left: 0, width: '1200px', height: '630px', display: 'flex',
				backgroundImage:
					'radial-gradient(58% 70% at 84% -6%, rgba(255,79,94,0.38), rgba(255,79,94,0) 58%),'
					+ 'radial-gradient(50% 60% at 6% 108%, rgba(13,167,226,0.18), rgba(13,167,226,0) 55%)'
			}} />

			{STARS.map(([x, y, s, o, c], i) => (
				<div key={i} style={{
					position: 'absolute', left: `${x * 12}px`, top: `${y * 6.3}px`,
					width: `${s * 2}px`, height: `${s * 2}px`, display: 'flex', borderRadius: '50%',
					backgroundColor: c, opacity: o
				}} />
			))}

			<div style={{
				position: 'relative',
				width: '1200px',
				height: '630px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				padding: '64px',
				zIndex: 1, // Ensures text stays structural and above backgrounds
			}}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<img src={LOGO_URI} width={172} height={44} alt="Horizon Hosting" />
					</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', maxWidth: '820px' }}>
					<div style={{
						display: 'flex', fontFamily: 'Poppins', fontSize: '70px',
						fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.025em',
						backgroundImage: 'linear-gradient(104deg, #FF9BA5 0%, #FF6170 50%, #FFB020 100%)',
						backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent'
					}}>{title}</div>
					{description ? (
						<div style={{
							display: 'flex', marginTop: '22px', maxWidth: '700px', fontSize: '27px',
							lineHeight: 1.42, color: '#D7DAE0'
						}}>{description}</div>
					) : null}
				</div>

				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
						<div style={{
							display: 'flex', width: '52px', height: '5px', borderRadius: '999px',
							backgroundImage: 'linear-gradient(90deg, #FF4F5E 0%, #FF9D4B 55%, #0DA7E2 100%)'
						}} />
						<span style={{ fontFamily: '"0xProto"', fontSize: '21px', color: '#99A0AE' }}>{url}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
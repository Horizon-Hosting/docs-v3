const MARK = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<defs>
<linearGradient id="n" x1="6" y1="8" x2="42" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#7B5CFF"/><stop offset=".52" stop-color="#E84CC4"/><stop offset="1" stop-color="#FF6B3D"/></linearGradient>
<linearGradient id="r" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#7B5CFF"/><stop offset="1" stop-color="#FFB020"/></linearGradient>
</defs>
<circle cx="24" cy="24" r="10.5" fill="url(#n)"/>
<circle cx="28.5" cy="21.5" r="10.5" fill="#070514" opacity=".16"/>
<g transform="rotate(-24 24 24)"><ellipse cx="24" cy="24" rx="21" ry="8.2" stroke="url(#r)" stroke-width="2.4" fill="none"/><circle cx="45" cy="24" r="2.6" fill="#FFB020"/></g>
</svg>`;
const MARK_URI = `data:image/svg+xml,${encodeURIComponent(MARK)}`;

const STARS: [number, number, number, number, string][] = [
	[7, 18, 2, 0.7, '#FFFFFF'], [14, 62, 1.5, 0.5, '#FFD980'], [21, 33, 2, 0.6, '#FFFFFF'], [27, 78, 1.5, 0.4, '#B194FF'],
	[33, 12, 2.5, 0.8, '#FFFFFF'], [38, 49, 1.5, 0.45, '#FFFFFF'], [44, 84, 2, 0.6, '#FFD980'], [51, 24, 1.5, 0.5, '#FFFFFF'],
	[58, 70, 2, 0.55, '#B194FF'], [63, 40, 1.5, 0.4, '#FFFFFF'], [69, 15, 2, 0.65, '#FFFFFF'], [74, 88, 1.5, 0.5, '#FFD980'],
	[80, 55, 2.5, 0.7, '#FFFFFF'], [86, 30, 1.5, 0.45, '#B194FF'], [91, 72, 2, 0.6, '#FFFFFF'], [95, 46, 1.5, 0.4, '#FFFFFF'],
	[4, 46, 1.5, 0.4, '#FFFFFF'], [18, 90, 2, 0.55, '#FFFFFF'], [47, 8, 1.5, 0.5, '#FFD980'], [66, 60, 1.5, 0.4, '#FFFFFF'],
	[11, 76, 1.5, 0.45, '#B194FF'], [55, 92, 2, 0.5, '#FFFFFF'], [88, 12, 1.5, 0.5, '#FFFFFF'], [30, 58, 1.5, 0.4, '#FFFFFF'],
];

export interface OgCardProps {
	title: string;
	description?: string;
	eyebrow?: string;
	url?: string;
}
export function OgCard({
	title,
	description,
	eyebrow = 'Documentation',
	url = 'hrzn.link/docs',
}: OgCardProps) {
	return (
		<div style={{
			position: 'relative',
			width: '1200px',
			height: '630px',
			display: 'flex',
			backgroundColor: '#070514',
			fontFamily: 'Hanken Grotesk',
			overflow: 'hidden',
		}}>
			<div style={{
				position: 'absolute', top: 0, left: 0, width: '1200px', height: '630px', display: 'flex',
				backgroundImage:
					'radial-gradient(58% 70% at 84% -6%, rgba(123,92,255,0.30), rgba(123,92,255,0) 55%),'
					+ 'radial-gradient(50% 60% at 6% 108%, rgba(255,107,61,0.18), rgba(255,107,61,0) 55%)'
			}} />

			<div style={{
				position: 'absolute', right: '-150px', top: '150px', width: '520px', height: '520px',
				display: 'flex', borderRadius: '50%', opacity: 0.22,
				backgroundImage: 'linear-gradient(135deg, #7B5CFF 0%, #E84CC4 50%, #FF6B3D 100%)'
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
					<div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
						<img src={MARK_URI} width={44} height={44} alt="" />
						<div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontFamily: 'Space Grotesk' }}>
							<span style={{ fontSize: '27px', fontWeight: 600, color: '#F4F1FF' }}>Horizon</span>
							<span style={{ fontSize: '27px', fontWeight: 500, color: '#8A82AE' }}>Hosting</span>
						</div>
					</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', maxWidth: '820px' }}>
					<div style={{ display: 'flex' }}>
						<div style={{
							display: 'flex', fontFamily: '"0xProto"', fontSize: '17px', fontWeight: 700,
							letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B194FF',
							backgroundColor: 'rgba(123,92,255,0.16)', border: '1px solid rgba(123,92,255,0.32)',
							borderRadius: '999px', padding: '7px 16px'
						}}>{eyebrow}</div>
					</div>
					<div style={{
						display: 'flex', marginTop: '14px', fontFamily: 'Space Grotesk', fontSize: '70px',
						fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.025em',
						backgroundImage: 'linear-gradient(102deg, #CDBAFF 0%, #F4A8E0 52%, #FFC94D 100%)',
						backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent'
					}}>{title}</div>
					{description ? (
						<div style={{
							display: 'flex', marginTop: '22px', maxWidth: '700px', fontSize: '27px',
							lineHeight: 1.42, color: '#BBB2DE'
						}}>{description}</div>
					) : null}
				</div>

				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
						<div style={{
							display: 'flex', width: '52px', height: '5px', borderRadius: '999px',
							backgroundImage: 'linear-gradient(90deg, #7B5CFF 0%, #E84CC4 55%, #FFB020 100%)'
						}} />
						<span style={{ fontFamily: '"0xProto"', fontSize: '21px', color: '#8A82AE' }}>{url}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
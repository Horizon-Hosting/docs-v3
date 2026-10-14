import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Link from 'fumadocs-core/link';
import { appName } from './shared';

const logo = (
  <>
    <img src="/logos/logo_light.svg" alt={appName} className="h-8 w-auto dark:hidden" />
    <img src="/logos/logo_dark.svg" alt={appName} className="hidden h-8 w-auto dark:block" />
  </>
);

const ctaUrl =
  'https://hrznhosting.com/?utm_source=docs&utm_medium=referral&utm_campaign=docs_nav';

// Mirrors hrzn-ui's <Button size="sm"> variants (see Button.svelte .btn / .btn-sm / .btn-ghost / .btn-primary).
// Flat fill on purpose: #FF4F5E is a far brighter hue than the violet this replaced, so the
// gradient + halo treatment that suited violet glares at this size.
const btnBase =
  'inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 min-h-[34px] text-[12.5px] font-semibold lg:flex-none';
const btnTransition = 'duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]';
const btnGhost = `${btnBase} transition-colors ${btnTransition} text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground`;
const btnPrimary = `${btnBase} bg-[#FF4F5E] text-white transition-[filter] ${btnTransition} hover:brightness-[1.08]`;

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: logo,
    },
    links: [
      {
        type: 'custom',
        children: (
          <div className="flex flex-row-reverse items-center gap-2 lg:flex-row lg:me-4">
            <Link href="/general/contact-us" className={btnGhost}>
              Contact Us
            </Link>
            <Link href={ctaUrl} className={btnPrimary}>
              Start your server
            </Link>
          </div>
        ),
      },
    ],
  };
}

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import appCss from '@/styles/app.css?url';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';
import { SidebarExclusiveFolders } from '@/lib/sidebar-exclusive-folders';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Horizon Hosting Docs',
      },
      {
        name: 'description',
        content: 'Guides and reference docs for Horizon Hosting game servers and VPS hosting.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/logos/icon_colour.svg"
      }
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <SidebarExclusiveFolders />
          <Outlet />
        </RootProvider>
        <Scripts />
      </body>
    </html>
  );
}

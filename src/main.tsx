import './index.css';
import '@/assets/fonts/inter.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Sidebar } from '@/components/sidebar';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className='flex gap-2'>
        <Sidebar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
      </div>
      {/* {import.meta.env.MODE === 'development' ? (
        <TanStackRouterDevtools />
      ) : null} */}
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className='p-2'>
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className='p-2'>Hello from About!</div>;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = new Router({ routeTree, defaultPreload: 'intent' });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

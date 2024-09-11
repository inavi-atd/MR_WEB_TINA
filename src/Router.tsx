// common
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import { MissionPage } from './pages/mission/MissionPage';

export const Router = () => {
  const link = '/';
  return (
    <RouterProvider
      router={createBrowserRouter([{ path: link, element: <MissionPage /> }])}
    ></RouterProvider>
  );
};

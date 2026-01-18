export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'L’Instant Hypnose',
    path: '/',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;

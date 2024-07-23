import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Accueil',
    path: '/',
    icon: icon('home-svgrepo-com'),
  },
/*   {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  }, */
 
  {
    title: 'favoris',
    path: '/products',
    icon: icon('ic_cart'),
  },
/*   {
    title: 'publier une annonce',
    path: '#',
    icon: icon('add-circle-svgrepo-com'),
  }, */
 
  {
    title: 'publier une annonce',
    path: '/blog',
    icon: icon('add-circle-svgrepo-com'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  }, 
 /*  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  }, */
];

export default navConfig;

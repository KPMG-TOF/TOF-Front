import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

// 수정: 네비바 정보

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'TOF',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'TOF History',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Search',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'History',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;

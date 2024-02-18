import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

// 수정: 네비바 정보

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'RFP List',
    path: '/',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'RFP DashBoard',
  //   path: '/rfp',
  //   icon: icon('ic_analytics'),
  // },
  // {
  //   title: 'Document',
  //   path: '/blog',
  //   icon: icon('ic_cart'),
  // },
  {
    title: 'Document List',
    path: '/user',
    icon: icon('ic_blog'),
  }
];

export default navConfig;

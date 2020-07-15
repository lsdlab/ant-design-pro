let apiHost;
if (process.env.APP_TYPE === 'site' || process.env.NODE_ENV !== 'production') {
  console.log('========== DEVELOPMENT RUNSERVER ==========');
  apiHost = 'http://localhost:9000';
} else {
  console.log('======== PRODUCTION BUILD ========');
  apiHost = 'https://localhost:9000';
}

module.exports = {
  navTheme: 'light',
  primaryColor: '#1890FF',
  layout: 'topmenu',
  contentWidth: 'Fixed',
  fixedHeader: true,
  autoHideHeader: false,
  fixSiderbar: false,
  menu: {
    disableLocal: false,
  },
  title: 'Agile API Docs',
  pwa: true,
  iconfontUrl: '',
  collapse: true,
  apiHost,
};

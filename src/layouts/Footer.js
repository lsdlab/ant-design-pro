import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'ade',
          title: 'ade',
          href: 'https://github.com/lsdlab/ade',
          blankTarget: true,
        },
        {
          key: 'lsdlab-ant-design-pro',
          title: 'lsdlab/ant-design-pro',
          href: 'https://github.com/lsdlab/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'ant-design-ant-design-pro',
          title: 'ant-design/ant-design-pro',
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },,
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018 Breakwire Lab
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;

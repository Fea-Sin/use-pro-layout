import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  SettingDrawer,
} from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import defaultSettings from '../../config/defaultSettings';
import DefaultFooter from '@/components/DefaultFooter';

import Link from 'umi/link';
import history from 'umi/router';
import logo from '../assets/logo.svg';

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const [settings, setSettings] = useState<Partial<Settings>>({
    ...defaultSettings,
    fixSiderbar: true,
  });
  return (
    <>
      <ProLayout
        logo={logo}
        menuHeaderRender={(logoDom, titleDom) => (
          <Link to="/">
            {logoDom}
            {titleDom}
          </Link>
        )}
        links={[
          <>
            <HeartTwoTone />
            <span>name</span>
          </>,
        ]}
        onCollapse={handleMenuCollapse}
        menuItemRender={(menuItemProps, defaultDom) =>
          menuItemProps.isUrl ? (
            defaultDom
          ) : (
            <Link className="qixian-menuItem" to={menuItemProps.path || '/'}>
              {defaultDom}
            </Link>
          )
        }
        rightContentRender={() => (
          <div
            style={{
              padding: '0 16px',
            }}
          >
            
          </div>
        )}
        collapsed={collapsed}
        onMenuHeaderClick={() => history.push('/')}
        footerRender={() => <DefaultFooter />}
        {...props}
        {...settings}
      >
        {props.children}
      </ProLayout>
    </>
  );
};

export default BasicLayout;

import { MenuProps } from 'antd/es/menu';

export type ContentWidth = 'Fluid' | 'Fixed';

export interface DefaultSettings {
  /**
   * theme for nav menu: 'dark' | 'light'
   */
  navTheme: MenuProps['theme'];
  /**
   * primary color of an design
   */
  primaryColor: string;
  /**
   * nav menu position: 'sidemenu' or 'topmenu'
   */
  layout: 'sidemenu' | 'topmenu';
  /**
   * layout of content: 'Fluid' or 'Fixed', only works when layout is topmenu
   */
  contentWidth: ContentWidth;
  /**
   * sticky header
   */
  fixedHeader: boolean;
  /**
   * sticky siderbar
   */
  fixSiderbar: boolean;
  menu: { locale: boolean };
  title: string;
  pwa: boolean;
  iconfontUrl: string;
  colorWeak: boolean;
}

export default {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'topmenu',
  contentWidth: 'Fixed',
  fixedHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'hello',
  pwa: false,
  iconfontUrl: '',
} as DefaultSettings

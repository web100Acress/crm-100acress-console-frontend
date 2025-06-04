import React from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  UserOutlined ,
  SettingOutlined, 
  PieChartOutlined,
  UsergroupAddOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu} from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/dashboard', icon: <PieChartOutlined />, label: 'Dashboard'},
  { key: '/leads', icon: <DesktopOutlined />, label: 'Leads' },
  { key: '/teams', icon: <UsergroupAddOutlined />, label: 'Team' },
  { key: '/reports', icon: <ContainerOutlined />, label: 'Report' },
  { key: '/users', icon: <UserOutlined />, label: 'Users' },
  { key: '/settings', icon: <SettingOutlined />, label: 'Settings' },
  { key: '/createUser',icon:<UserAddOutlined />,label:'Create User'}
];
type CustomSiderProps = {
  onSelectKey: (key: string) => void; 
};


const CustomSider: React.FC<CustomSiderProps> = ({ onSelectKey }) => {
  const navigate = useNavigate();


  const handleMenuClick: MenuProps['onClick'] = (e) =>{
    console.log('Menu item clicked:', e);
    onSelectKey(e.key);
    navigate(e.key); 
  }

  return (
  <div className="h-screen flex flex-col bg-white relative p-1">


    {/* Menu */}
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
      items={items}
      onClick={handleMenuClick}
    />

  {/* Avatar at the bottom */}
  {/* <div className="p-4 flex justify-start items-center absolute bottom-0 w-full">
    <UserDetails />
  </div> */}
</div>
  );
};

export default CustomSider;

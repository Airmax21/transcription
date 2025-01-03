import { useAppDispatch } from "@/store"
import { BulbOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps } from "antd"
import React from "react"

const { Header } = Layout

const HeaderComponent: React.FC = () => {
    const dispatch = useAppDispatch()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Dashboard'
        },
        {
            key: '2',
            label: 'Convert'
        }
    ]

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center', background: 'white' }}>
                <h1 className="text-lg font-bold ">Transcription</h1>
                {/* <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                /> */}
            </Header>
        </>
    )
}

export default HeaderComponent;
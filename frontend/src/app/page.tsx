'use client'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import React from 'react';

const Home: React.FC = () => {
    const router = useRouter();
    router.replace('/dashboard')
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="text-white p-4 rounded">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
                </div>
            </div>
        </>
    )
};

export default Home;
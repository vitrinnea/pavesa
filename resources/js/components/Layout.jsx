import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/settings')
            .then(response => response.json())
            .then(data => {
                setSettings(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching settings:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Cargando...</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header settings={settings} />
            <main className="flex-grow">
                <Outlet context={[settings]} />
            </main>
            <Footer settings={settings} />
        </div>
    );
};

export default Layout;

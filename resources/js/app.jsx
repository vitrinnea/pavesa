import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
// Importar los estilos CSS
import '../css/app.css';
import '../css/additional.css';
import '../css/additional-service-banner.css'; // Nu

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app'));
    root.render(<App />);
}

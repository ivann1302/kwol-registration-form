import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import RegisterPage from './pages/registerPage/registerPage';
import UsersPage from './pages/usersPage/usersPage';


export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <Header />
                <main className="max-w-2xl mx-auto px-4 py-6 xs361:py-10">
                    <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="*" element={<Navigate to="/register" replace />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}



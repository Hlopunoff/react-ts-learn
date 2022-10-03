import {Routes, Route} from 'react-router-dom';
import { LoginPage } from './pages/loginPage/LoginPage';
import { MainPage } from './pages/MainPage';

export const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </>
    );
};
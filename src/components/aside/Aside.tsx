import {Link, NavLink} from 'react-router-dom';
import st from './aside.module.scss';

export const Aside = () => {

    return (
        <aside className={st['aside']}>
            <h2 className={st['aside__title']}>Demo application</h2>
            <NavLink 
                to="/reports" 
                className={({isActive}) => isActive ? (st['aside__navlink']) : undefined}
                >Список отчётов</NavLink>
            <Link to="/" className={st['aside__goback']}>Выйти</Link>
        </aside>
    );
};
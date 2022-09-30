
import st from './loginPage.module.scss';

export const LoginPage: React.FC = () => {
    return (
        <>
            <main className={st['auth']}>
                <form action="GET" className={st['form']}>
                    <h1 className={st['form__title']}>Авторизация</h1>
                    <div className={st['form__fields']}>
                        <div className={st['form__field']}>
                            <label htmlFor="username" className={st['form__label']}>Логин</label>
                            <input type="text" className={st['form__input']} name="username" id='username' placeholder='username'/>
                        </div>
                        <div className={st['form__field']}>
                            <label htmlFor="password" className={st['form__label']}>Пароль</label>
                            <input type="password" className={st['form__input']} name="password" id='password' placeholder='password'/>
                        </div>
                    </div>
                    <button type="submit" className={st['form__btn']}>Войти</button>
                </form>
            </main>
        </>
    );
};
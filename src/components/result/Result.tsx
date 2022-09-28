
import st from './result.module.scss';

interface IResultProps {
    total: number;
    correct: number;
}

export const Result: React.FC<IResultProps> = ({correct, total}) => {
    return (
        <div className={st['result']}>
            <h2 className={st['result__title']}>Ваш результат!</h2>
            <p className={st['result__text']}>Вы ответили правильно на {correct} из {total} вопросов.</p>
            <a href="/" className={st['result__again']}>Попробовать снова</a>
        </div>
    );
};
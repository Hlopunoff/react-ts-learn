
import { IQuestion } from '../app/App';
import st from './quiz.module.scss';

interface IQuestionProps {
    question: IQuestion;
    addStep: (selected: number) => void;
}

export const Quiz: React.FC<IQuestionProps> = ({question, addStep}) => {
    return (
        <div className={st['quiz']}>
            <h2 className={st['quiz__question']}>{question.text}</h2>
            <ul className={st['quiz__list']}>
                {question.variants.map((item, index) => <li 
                    className={st['quiz__item']}
                    onClick={() => addStep(index)}
                    key={item}>{item}</li>)}
            </ul>
        </div>
    );
};
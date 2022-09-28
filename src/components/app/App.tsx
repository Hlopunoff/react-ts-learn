import React, {useState} from 'react';
import { ProgressBar } from '../progressBar/ProgressBar';
import { Quiz } from '../quiz/Quiz';
import { Result } from '../result/Result';

import st from './app.module.scss';


export interface IQuestion {
    text: string;
    variants: string[];
    correct: number;
}

export const App = () => {
    const questions: IQuestion[] = [
        {
            text: "Что такое React?",
            variants: ["Библиотека для отрисовки пользовательских интерфейсов", "Что то непонятное", "Надстройка над JavaScript"],
            correct: 0,
        },
        {
            text: "Что такое компонент?",
            variants: ["Блок кода", "Что-то страшное...", "Блок кода, который может переиспользоваться в разных частях приложения"],
            correct: 2,
        },
        {
            text: "Что такое HOC?",
            variants: ["Heart Of Component", "Higher Ordered Component - Компонент высшего порядка, который может принимать в качестве пропов другие компоненты и возвращать уже модифицированный компонент", "..."],
            correct: 1
        }
    ];

    const [step, setStep] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const addStep = (selected: number) => {
        if(selected === questions[step].correct) {
            setCorrectAnswers(prev => prev + 1);
        }
        setStep(prev => prev + 1);
    };

    return (
        <main className={st['main']}>
            <section className={st['quiz__substrate']}>
                <ProgressBar prc={Math.round(step / questions.length * 100)}/>
                {step === questions.length ? <Result total={questions.length} correct={correctAnswers}/> : <Quiz question={questions[step]} addStep={addStep} />}
            </section>
        </main>
    );
};

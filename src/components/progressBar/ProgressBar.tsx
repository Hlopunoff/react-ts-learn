
import st from './progressBar.module.scss';

interface IProgress {
    prc: number;
}

export const ProgressBar: React.FC<IProgress> = ({prc}) => {
    return (
        <div className={st['progress']}>
            <div className={st['progress__line']} style={{width: `${prc}%`}}></div>
        </div>
    );
};

import st from './reportsList.module.scss';

import trashIcon from '../../assets/icons/trash.svg';
import { SingleReport } from '../singleReport/SingleReport';

export const ReportsList = () => {
    return (
        <section className={st['reports']}>
            <h2 className={st['reports__title']}>Все отчёты</h2>
            <div className={st['reports__header']}>
                <div className={st['reports__heading']}>
                    <h3>Идентификатор</h3>
                </div>
                <div className={st['reports__heading']}>
                    <h3>Тип идентификатора</h3>
                </div>
                <div className={st['reports__heading']}>
                    <h3>Дата</h3>
                </div>
                <div className={st['reports__heading']}>
                    <h3>Статус</h3>
                </div>
            </div>
            <div className={st['reports__body']}>
                <SingleReport/>
                <SingleReport/>
                <SingleReport/>
            </div>
        </section>
    );
};
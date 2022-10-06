import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';

import st from './reportsList.module.scss';

import { SingleReport } from '../singleReport/SingleReport';
import { fetchReports } from '../../slices/reportSlice';

export const ReportsList = () => {
    const dispatch = useAppDispatch();
    const {list: reports, error: isError, loading} = useAppSelector(state => {
        return state.reports;
    });

    useEffect(() => {
        dispatch(fetchReports('1'));
    }, [ ]);

    const spinner = loading ? <h2>Загрузка...</h2> : null;
    const error = isError ? <h2>Ошибка!</h2> : null;
    const content = !(spinner || error || !reports) ? reports.map(report => {
        return <SingleReport 
            key={report.vehicleId} 
            vehicleId={report.vehicleId}
            idType={report.idType}
            statusType={report.statusType}
            date={report.date}
            id={report.id}/>
    }) : null;

    return (
        <div className={st['reports']}>
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
                {spinner}
                {error}
                {content}
            </div>
        </div>
    );
};

import st from './reportsList.module.scss';

import { SingleReport } from '../singleReport/SingleReport';

export const ReportsList = () => {
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
                <SingleReport 
                    statusType='done' 
                    status='progress' 
                    vehicleId='4F2YU08102KM26251'
                    idType='VIN'/>
                <SingleReport 
                    statusType='progress' 
                    status='done' 
                    vehicleId='4F2YU08102KM26251'
                    idType='ГРЗ'/>
                <SingleReport 
                    statusType='error' 
                    status='error' 
                    vehicleId='4F2YU08102KM26251'
                    idType='BODY'/>
            </div>
        </div>
    );
};
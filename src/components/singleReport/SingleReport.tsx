
import st from './singleReport.module.scss';

import trashIcon from '../../assets/icons/trash.svg';

const statusStyle = {
    done: '#29CC97',
    error: '#F12B2C',
    progress: '#F1A22B',
};

interface SingleReportProps {
    statusType: 'progress' | 'done' | 'error';
    status: string;
    vehicleId: string;
    idType: 'VIN' | 'ГРЗ' | 'BODY';
}

export const SingleReport: React.FC<SingleReportProps> = ({statusType, status, vehicleId, idType}) => {

    return (
        <div className={st['report']}>
            <div className={st['report__col']}>
                <span className="report__id">{vehicleId}</span>
            </div>
            <div className={st['report__col']}>
                <span className="report__type">{idType}</span>
            </div>
            <div className={st['report__col']}>
                <span className="report__date">26.05.2019 10:00:00</span>
            </div>
            <div className={st['report__col']}>
                <span className={st['report__status']} style={{background: statusStyle[statusType]}}>{status}</span>
            </div>
            <div className={st['report__del']}>
                <img src={trashIcon} alt="delete report"/>
            </div>
        </div>
    );
};
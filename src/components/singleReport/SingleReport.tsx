import {useAppDispatch} from '../../hooks/hooks';
import {removeReport as deleteReport} from '../../slices/reportSlice';

import st from './singleReport.module.scss';
import trashIcon from '../../assets/icons/trash.svg';

const statusStyle = {
    done: '#29CC97',
    error: '#F12B2C',
    progress: '#F1A22B',
};

interface SingleReportProps {
    statusType: 'progress' | 'done' | 'error';
    vehicleId: string;
    idType: string;
    date: string;
    id: string;
}

export const SingleReport: React.FC<SingleReportProps> = ({statusType, vehicleId, idType, date, id}) => {
    const dispatch = useAppDispatch();

    const removeReport = (id: string) => {
        dispatch(deleteReport(id));
    };

    return (
        <div className={st['report']}>
            <div className={st['report__col']}>
                <span className="report__id">{vehicleId}</span>
            </div>
            <div className={st['report__col']}>
                <span className="report__type">{idType}</span>
            </div>
            <div className={st['report__col']}>
                <span className="report__date">{date.toString()}</span>
            </div>
            <div className={st['report__col']}>
                <span className={st['report__status']} style={{background: statusStyle[statusType]}}>{statusType}</span>
            </div>
            <div 
                className={st['report__del']}
                onClick={() => removeReport(id)}>
                <img src={trashIcon} alt="delete report"/>
            </div>
        </div>
    );
};
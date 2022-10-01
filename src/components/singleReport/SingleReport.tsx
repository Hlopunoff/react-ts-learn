
import st from './singleReport.module.scss';

export const SingleReport = () => {
    return (
        <div className={st['report']}>
            <div className={st['report__col']}>
                <span className="report__id">4F2YU08102KM26251</span>
            </div>
            <div className={st['report__col']}>
                <span className="report__type">VIN</span>
            </div>
            <div className={st['report__col']}>
                <span className="report__date">26.05.2019 10:00:00</span>
            </div>
            <div className={st['report__col']}>
                <span className={st['report__status']}>Error</span>
            </div>
            {/* <div className="report__del">
                <img src="http://www.w3.org/2000/svg" alt="delete report" />
            </div> */}
        </div>
    );
};
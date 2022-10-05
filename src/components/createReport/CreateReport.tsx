import {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import {useAppDispatch} from '../../hooks/hooks';
import {addNewReport, Report} from '../../slices/reportSlice';

import st from './createReport.module.scss';


export const CreateReport: React.FC = () => {
    const dispatch = useAppDispatch();
    const [vehicleId, setVehicleId] = useState<string>('');
    const [idType, setIdType] = useState<string>("VIN");
    
    const handleVehicleId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(e.target.value) {
            setVehicleId(e.target.value)
        }
    };

    const handleIdType: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        if(e.target.value) {
            setIdType(e.target.value);
        }
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if(vehicleId !== '' && idType) {
            const data: Report = {
                vehicleId,
                idType,
                statusType: 'progress',
                date: `${new Date().getUTCDay()}.${new Date().getUTCMonth()}.${new Date().getUTCFullYear()}`,
                id: Date.now().toString(),
            }
            dispatch(addNewReport(JSON.stringify(data)));
        }
    };

    return (
        <form action="POST" className={st['addForm']} id="addForm" onSubmit={handleSubmit}>
            <h2 className={st['addForm__title']}>Создать отчёт</h2>
            <div className={st['addForm__fields']}>
                <div className={st['addForm__field']}>
                    <label htmlFor="ID" className={st['addForm__label']}>Идентификатор</label>
                    <input type="text" className={st['addForm__input']} name="ID" id="ID" value={vehicleId} onChange={handleVehicleId}/>
                </div>
                <div className={st['addForm__field']}>
                    <label htmlFor="type" className={st['addForm__label']}>Тип идентификатора</label>
                    <select className={st['addForm__input']} name="type" id="type" form='addForm' value={idType} onChange={handleIdType}>
                        <option value="ГРЗ">ГРЗ</option>
                        <option value="VIN">VIN</option>
                        <option value="BODY">BODY</option>
                    </select>
                </div>
                <div className={st['addForm__field']}>
                    <button type="submit" className={st['addForm__btn']}>Создать</button>
                </div>
            </div>
        </form>
    );
};

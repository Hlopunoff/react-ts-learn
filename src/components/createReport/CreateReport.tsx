
import st from './createReport.module.scss';

export const CreateReport: React.FC = () => {
    return (
        <form action="POST" className={st['addForm']} id="addForm">
            <h2 className={st['addForm__title']}>Создать отчёт</h2>
            <div className={st['addForm__fields']}>
                <div className={st['addForm__field']}>
                    <label htmlFor="ID" className={st['addForm__label']}>Идентификатор</label>
                    <input type="text" className={st['addForm__input']} name="ID" id="ID"/>
                </div>
                <div className={st['addForm__field']}>
                    <label htmlFor="type" className={st['addForm__label']}>Тип идентификатора</label>
                    <select className={st['addForm__input']} name="type" id="type" form='addForm'>
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

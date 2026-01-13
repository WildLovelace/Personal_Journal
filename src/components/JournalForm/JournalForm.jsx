import './JournalForm.css'
import { useState } from 'react'
import Button from '../Button/Button'

function JournalForm({ onSubmit }) {
    //STATEFULL КОМПОНЕНТ, ТК ИМЕЕТ ЛОГИКУ И УПРАВЛЯЕТ СОСТОЯНИЕМ
    // const [inputData, setInputData] = useState('');

    // const inputChange = (e) => {
    //     setInputData(e.target.value);
    //     console.log(inputData);
    // };
    //<input type="text" name='tag' value={inputData} onChange={inputChange} />

    const addJournalItem = (e) => {
        e.preventDefault();

        //React сравнивает объекты по ссылке (shallow comparison)
        //state и setState(state) передают одну и ту же ссылку на объект
        //React видит, что ссылка не изменилась, и пропускает ререндер

        //Всегда создавай новый объект/массив при изменении состояния в React

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        onSubmit(formProps);
    }

    return (
        <>
            <form className='journal-form' onSubmit={addJournalItem} >
                <input type="title" name='title' />
                <input type="date" name='date' />
                <input type="text" name='tag' />{/* контролируемый компонент */}
                <textarea name="text  " cols="30" rows="10"></textarea>
                <Button text="Сохранить" />
            </form>
        </>
    );
}

export default JournalForm;

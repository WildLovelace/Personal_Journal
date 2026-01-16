import styles from './JournalForm.module.css'
import { useState } from 'react'
import Button from '../Button/Button'
import cn from 'classnames';

function JournalForm({ onSubmit }) {
    const [formValideState, setFormValideState] = useState({ title: true, post: true, date: true });

    const addJournalItem = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        let isFormValid = true;
        if (!formProps.title?.trim().length) {
            setFormValideState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValideState(state => ({ ...state, title: true }));
        }

        if (!formProps.post?.trim().length) {
            setFormValideState(state => ({ ...state, post: false }));
            isFormValid = false;
        } else {
            setFormValideState(state => ({ ...state, post: true }));
        }

        if (!formProps.date) {
            setFormValideState(state => ({ ...state, date: false }));
            isFormValid = false;
        } else {
            setFormValideState(state => ({ ...state, date: true }));
        }

        if (!isFormValid) {
            return;
        }
        onSubmit(formProps);
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem} >
                <div>
                    <input type="title" name='title' className={`${styles['input-title']} ${formValideState.title ? '' : styles['invalid']}`} />
                </div>

                <div className={styles['form-row']}>
                    <label for="date" className={styles['form-label']}>
                        <img width={20} height={20} src="./calendar.svg" alt="" />
                        <span>Дата</span>
                    </label>
                    <input type="date" name='date' id='date' className={`${styles['input']} ${formValideState.date ? '' : styles['invalid']}`} />
                </div>

                <div className={styles['form-row']}>
                    <label for="tag" className={styles['form-label']}>
                        <img width={20} height={20} src="./folder.svg" alt="" />
                        <span>Тэг</span>
                    </label>
                    <input type="text" name='tag' id='tag' />
                </div>


                <textarea name="post" cols="30" rows="10" className={`${styles['input']} ${formValideState.post ? '' : styles['invalid']}`} />
                <Button text="Сохранить" />
            </form>
        </>
    );
}

export default JournalForm;

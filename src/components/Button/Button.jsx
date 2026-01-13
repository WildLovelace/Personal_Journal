import './Button.css'

function Button({ text, onClick }) {
    //STATELESS КОМПОНЕНТ КОНТРОЛИРУЕМЫЙ(ONCLICK) ИЗ ВНЕ 
    // const [text, setText] = useState('Сохранить')

    // const clicked = () => {
    //     setText('Закрыть')
    //     // text = (text == 'Сохранить') ? 'Закрыть' : 'Сохранить';
    //     console.log(text)
    // }

    return (
        <button className='button accent' onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;

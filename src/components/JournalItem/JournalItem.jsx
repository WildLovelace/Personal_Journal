import './JournalItem.css'

function JournalItem({ title, date, text }) {
    date = date.toLocaleDateString('ru-RU');

    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{date}</div>
                <div className="journal-item__text">{text}</div>
            </h2>
        </>
    );
}

export default JournalItem;


import './App.css'

import Header from './components/Header/Header'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
// import Button from './components/Button/Button'
import { useState } from 'react'

function App() {

  const INITIAL_DATA = [
    // {
    //   id: 1,
    //   title: ';ksjdfhkjs;rfdngjbnsr;jkgbn',
    //   text: 'skdjfhgsrufgiushdfguiohsrtuiofg',
    //   date: new Date()
    // }
  ]

  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
    }]);
  };

  return (

    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
      {/* {[<Button>1</Button>, <Button>2</Button>]} 
          будет работать тк реакт выведет элементы массива подряд */}
    </div>

  )
}

export default App;

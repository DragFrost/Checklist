import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {

  const [items, setItems] = useState( localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : [] );

  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("bgcolor")));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('taskList', JSON.stringify(newItems));
  }   

  const addItem = (item) => {  
    let counter; 
    if (!localStorage.getItem('counter')) {
      counter = 0;
    }  
    counter = JSON.parse(localStorage.getItem('counter'));
    counter++;
    localStorage.setItem('counter', JSON.stringify(counter));
    const myNewItem = {id: counter, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => { return item.id !== id });
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
    console.log(JSON.parse(localStorage.getItem('counter')));
  }


  return (
    <div className={dark === true ? 'App dark' : 'App'}>
      <Header
        dark={dark}
        setDark={setDark}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()) ) }
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length ? items.length : 0} />
    </div>
  );
}

export default App;
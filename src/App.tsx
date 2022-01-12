import Header from './components/Header';
import Main from './components/Main';
import './App.scss';
import { useEffect } from 'react';
import { getHotels } from './features/search';
import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => dispatch(getHotels()), []);  
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './components';
import {Home, SingleUser} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

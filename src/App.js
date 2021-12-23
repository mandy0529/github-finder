import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home, SingleUser, Users} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

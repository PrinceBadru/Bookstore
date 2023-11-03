import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Category from './components/Category';
import Books from './components/Books';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <Books />
          }
      />
      <Route path="/category" element={<Category />} />
    </Routes>
  </div>
);

export default App;

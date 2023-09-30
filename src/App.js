import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import BookList from './components/bookList';
import Category from './components/Category';
import BookDiv from './components/bookForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <BookList />
              <BookDiv />
            </>
          )}
        />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;

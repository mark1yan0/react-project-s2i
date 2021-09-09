import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//state
import BooksProvider from './components/context/BooksProvider';
import LibraryProvider from './components/context/LibraryProvider';
//components
import Nav from './components/nav/Nav';
import Library from './components/library/Library';
import Header from './components/header/Header';
import Row from './components/books/Row';
import Categories from './components/category/Categories';
import SinglePage from './components/singlepage/SinglePage';
import SearchPage from './components/searchpage/SearchPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <BooksProvider>
        <LibraryProvider>
          <Library />
          <div className='App'>
            <Nav />

            <Switch>
              <Route exact path='/'>
                <Header />
                <section className='content__section'>
                  <Row title='Top Rated' />
                  <Row title='Novità' />
                  <Row title='Altro' />
                  <Categories />
                </section>
              </Route>

              <section className='content__section__single'>
                <Route path='/singlepage'>
                  <SinglePage />
                </Route>

                <Route path='/search'>
                  <SearchPage />
                </Route>
              </section>
            </Switch>
            <Footer />
          </div>
        </LibraryProvider>
      </BooksProvider>
    </Router>
  );
}
export default App;

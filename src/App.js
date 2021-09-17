import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//state
import BooksProvider from './components/context/BooksProvider';
import { LibraryProvider } from './components/context/LibraryProvider';
//components
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Row from './components/books/Row';
import SinglePage from './components/singlepage/SinglePage';
import SearchPage from './components/searchpage/SearchPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <BooksProvider>
        <LibraryProvider>
          <div className='App'>
            <Nav />

            <Switch>
              <Route exact path='/'>
                <Header />
                <section className='content__section'>
                  <Row title='Preferiti' type='favourites' />
                  <Row title='Altro' type='row' />
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

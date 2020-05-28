import React from 'react';
import { Tab } from 'react-bootstrap';
import Header from './components/Header';
import MenuTab from './components/MenuTab';
import ContenTab from './components/ContenTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'; 

function App() {
  return (
    <div className="App">
       <section id="page-grid" className="container-fluid">
          <Header/>
          <section id="main">
            <Tab.Container defaultActiveKey="link-1">
              <div className="card text-center">
                <MenuTab/>
                <ContenTab/>
              </div>
            </Tab.Container>

          </section>
       </section>
    </div>
  );
}

export default App;

import './App.css';
import { Button,FormControl, InputGroup,Col, Row } from 'react-bootstrap';
import Header from './Components/Header/Header';

import HeroSection from './Components/Home/HeroSection/HeroSection';
import Footer from './Components/Footer/Footer';
import HomeSection1 from './Components/Home/HomeSection-1/HomeSection1';

function App() {
  return (
    <div className='App'>
      <div style={{ backgroundColor: '#76C3EB'}} className=' p-1 align-items-center'>
        <Row>
          <Col>
            <InputGroup className="ms-auto w-50">
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
              <Button style={{ fontSize: '0.8rem', fontWeight: '700' }} className='ms-2 mt-1' variant="outline-dark" id="button-addon1">
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col className='text-end me-3 my-auto'>
            <span className='ms-2 fw-bold'>Contact</span>
            <span className='ms-2 fw-bold'>Sign in</span>
          </Col>
        </Row>
      </div>
      <Header></Header>
      <HeroSection></HeroSection>
      <HomeSection1></HomeSection1>
    <Footer></Footer>
    </div>
  );
}

export default App;

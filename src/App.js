// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from './composants/Calendar';
import { Form } from './composants/Form';

function App() {
  return (
    <div className="container">
      <div className='row m-4'>
        <div className='col-6 px-3'>
          <Calendar/>
        </div>

        <div className='col-6 px-3'>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;

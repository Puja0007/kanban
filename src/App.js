import MainRoute from "./components/MainRoute/MainRoute";
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
        <ToastContainer />
      <MainRoute />
    </div>
  );
}

export default App;

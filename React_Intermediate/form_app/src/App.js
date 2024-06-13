import './App.css';
// import FormPractice from './components/FormPractice';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
 
  return (
		<div className="w-full h-full bg-slate-400 pb-[40px]">
         <Navbar></Navbar>
        <Form></Form>
		</div>
	);
}

export default App;

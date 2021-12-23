import logo from './logo.svg';
import './App.css';

function App() {
  let onSubmit = ()=>{
    alert('submitted');
  }
  let onKeyUp =(event)=>{
    if(event.keyCode===13){
      onSubmit();
    }
  }
  return (
    <div className="App">
      <input onKeyUp={onKeyUp}/>
    </div>
  );
}

export default App;

import './App.css';

const App = () => {
const message :string ='Hello world';
const handleClick = (name: string) => alert(`Bonjour ${name}`);
const handleClickSanParam = () => alert("yes Papa !");
return (
  <div>
    <p className='color-pink'>{message}</p>
    <button onClick={handleClickSanParam}>Test</button>
    <p>coucou</p>
    <button onClick={() => handleClick('Safae')}> Hello</button>
  </div>
);


  // return <div>Hello word</div>;
};

export default App;

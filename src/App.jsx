import Header from './components/Header';
import UserInput from './components/UserInput';

function App() {
  return (
    <>
      <Header />
      <UserInput />

      <div id="result">
        <div className="center">
          <h2>Results</h2>
        </div>
      </div>
    </>
  );
}

export default App;

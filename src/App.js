import './App.css';
import ToDoMenu from './Components/ToDoMenu';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-gray-300 via-blue-500 to-gray-300 text-white">
      <h1 className='text-white mb-8 text-5xl pt-12 font-bold'>To-do List</h1>
      <ToDoMenu />
    </div>
  );
}

export default App;

import MatrixComp from './components/MatrixComp';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="mb-8 text-center text-lg font-semibold">
        This project is a React-based application that creates a 3x3 matrix of cells. Users can click on cells to change their color to green. When the ninth cell is clicked, the colors of the previously clicked cells change to orange in a specified order with a delay between each change. The application also includes a reset button to revert the matrix to its initial state.
      </p>
      <MatrixComp />
    </div>
  );
};

export default App;

/*

import Matrix from './components/Matrix';
const App = () => {
  return (
    <>
    <Matrix/>
    </>
  );
};

export default App;


*/
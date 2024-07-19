
import React, { useEffect, useState } from 'react';

const Matrix = () => {
    const [matrix, setMatrix] = useState(Array(9).fill('white'));
    const [clickOrder, setClickOrder] = useState([]);
    const [auto, setAuto] = useState(false)
    const autoColorChange = () => {
        setTimeout(() => {
            const newMatrix = [...matrix];
            clickOrder.forEach((item, i) => {
                setTimeout(() => {
                    newMatrix[item] = 'orange';
                    setMatrix([...newMatrix]);
                }, i * 500);
            });
        }, 1000);
    };
    const handleClick = (index) => {
        if (index === 8 && matrix[index] === 'white') {
            const newMatrix = [...matrix];
            newMatrix[index] = 'green';
            setMatrix(newMatrix);
            setClickOrder([...clickOrder, index]);
            setAuto(true);
        } else if (matrix[index] === 'white') {
            const newMatrix = [...matrix];
            newMatrix[index] = 'green';
            setMatrix(newMatrix);
            setClickOrder([...clickOrder, index]);
        }
    };
    useEffect(() => {
        if (auto) {
            autoColorChange();
        }
    }, [auto])
    const resetHandler = () => {
        setMatrix(Array(9).fill('white'));
        setClickOrder([]);
        setAuto(false);
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="grid grid-cols-3 gap-1">
                {matrix.map((color, index) => (
                    <div
                        key={index}
                        className="w-20 h-20 border cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => handleClick(index)}
                    />
                ))}
                <div>
                    <button
                        onClick={resetHandler}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-
        2 px-4 rounded">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Matrix;

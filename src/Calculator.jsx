
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-gray-50 dark:bg-gray-700  rounded-lg shadow-lg p-8" >
        <div className="text-right mb-4 bg-white dark:bg-gray-900 p-4 rounded-lg text-lg  text-gray-900 dark:text-gray-100 font-medium">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2 font-medium">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="bg-gray-100 dark:bg-gray-600 p-4 rounded-full text-xl text-gray-900 w-16 h-16 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-500"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleClick("C")}
            className="col-span-4 bg-red-500 dark:bg-red-700 text-white p-4 rounded-lg text-xl hover:bg-red-600 dark:hover:bg-red-800"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

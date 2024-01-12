import { useState, useEffect } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    let operand1 = randomNumber(1, 10);
    let operand2 = randomNumber(1, 10);

    const operators = ["+", "-", "*", "/"];

    const generatedQuestion =
      `${operand1} ` +
      operators[randomNumber(0, operators.length - 1)] +
      ` ${operand2}`;

    const correctAnswer = eval(generatedQuestion);

    setCorrectAnswer(correctAnswer);
    const incorrectAnswers = generateIncorrectAnswers(correctAnswer);

    const allOptions = [...incorrectAnswers, correctAnswer];
    shuffleArray(allOptions);

    setQuestion(generatedQuestion);
    setOptions(
      allOptions.map((option) =>
        Number.isInteger(option) ? option.toString() : option.toFixed(2)
      )
    );
  }, [score]);

  const generateIncorrectAnswers = (correctAnswer: number): number[] => {
    const incorrectAnswers: number[] = [];
    for (let i = 0; i < 3; i++) {
      incorrectAnswers.push(correctAnswer + randomNumber(1, 5)); // Adjust as needed
    }
    return incorrectAnswers;
  };

  const shuffleArray = (array: any[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = randomNumber(0, i);
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleButtonClick = (selectedAnswer: string) => {
    selectedAnswer === correctAnswer.toString(10)
      ? setScore(score + 1)
      : setScore(score - 0.25);
  };

  return (
    <div>
      <h1>Generated Question: {question}</h1>

      {options.map((option, index) => (
        <button key={index} onClick={() => handleButtonClick(option)}>
          {option}
        </button>
      ))}
      <h2>score : {score}</h2>
    </div>
  );
};

export default App;

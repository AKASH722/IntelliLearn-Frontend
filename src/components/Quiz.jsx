import React, { useState, useEffect } from "react";

const Quiz = () => {
    // State variables
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackClass, setFeedbackClass] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch quiz data from API when component mounts
    useEffect(() => {
        fetch("https://46ea51f0f0ba44aabf2773fdd3d8c265.api.mockbin.io/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => {
                setQuestions(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    // Handle the answer selection and move to the next question
    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            // Correct answer
            setFeedbackMessage('Correct! 🎉');
            setFeedbackClass('text-green-500 font-bold');
            setTimeout(() => {
                setFeedbackMessage('');
                const nextIndex = currentQuestionIndex + 1;
                if (nextIndex < questions.length) {
                    setCurrentQuestionIndex(nextIndex);
                } else {
                    setQuizFinished(true);
                }
            }, 1000);
        } else {
            // Incorrect answer
            setFeedbackMessage('Incorrect! Try again. ❌');
            setFeedbackClass('text-red-500 font-bold');
            setTimeout(() => {
                setFeedbackMessage('');
            }, 1000);
        }
    };

    // Render the quiz content
    const renderQuiz = () => {
        if (quizFinished) {
            return <p className="text-lg text-center text-blue-500">Quiz finished! Thank you for participating. 🎉</p>;
        }

        if (loading) {
            return <p className="text-lg text-center text-white">Loading...</p>;
        }

        if (error) {
            return <p className="text-lg text-center text-red-500">Error: {error.message}</p>;
        }

        const currentQuestion = questions[currentQuestionIndex];

        return (
            <div className="flex flex-col items-center mb-64 text-white">
                <h2 className="text-2xl font-semibold mb-6 text-center max-w-lg">
                    {currentQuestion.question}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg w-full">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            className="py-3 px-24 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 text-center overflow-hidden text-ellipsis"
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {/* Feedback message */}
                {feedbackMessage && (
                    <p className={`mt-4 ${feedbackClass}`}>
                        {feedbackMessage}
                    </p>
                )}
            </div>
        );
    };

    // Render the quiz component
    return (
        <div className="min-h-[39.5rem] pt-28 justify-center items-center bg-gray-800 pt-12">
            {renderQuiz()}
        </div>
    );
};

export default Quiz;

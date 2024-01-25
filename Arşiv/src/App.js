import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Cildinizde sivilcelenme mi var?",
      answerOptions: [
        { answerText: "Evet", isMacunCorrect: false, isKremCorrect: true },
        { answerText: "Biraz", isMacunCorrect: false, isKremCorrect: false },
        { answerText: "Çok Fazla", isMacunCorrect: true, isKremCorrect: false },
        { answerText: "Hayır", isMacunCorrect: false, isKremCorrect: false },
      ],
    },
    {
      questionText: "Hazımsızlık şikayetiniz var mı?",
      answerOptions: [
        {
          answerText: "Evet",
          isMacunCorrect: false,
          isKremCorrect: false,
        },
        { answerText: "Biraz", isMacunCorrect: true, isKremCorrect: false },
        {
          answerText: "Çok Fazla",
          isMacunCorrect: false,
          isKremCorrect: false,
        },
        {
          answerText: "Hayır",
          isMacunCorrect: false,
          isKremCorrect: true,
        },
      ],
    },
    {
      questionText: "Uyuma Probleminiz Varmı?",
      answerOptions: [
        { answerText: "Evet", isMacunCorrect: true, isKremCorrect: true },
        {
          answerText: "Çok Fazla",
          isMacunCorrect: false,
          isKremCorrect: false,
        },
        { answerText: "Biraz", isMacunCorrect: false, isKremCorrect: false },
        {
          answerText: "Hayır",
          isMacunCorrect: false,
          isKremCorrect: false,
        },
      ],
    },
    {
      questionText: "Cilt Kuruluğuna Sahip Misiniz",
      answerOptions: [
        { answerText: "Evet", isMacunCorrect: false, isKremCorrect: false },
        {
          answerText: "Biraz",
          isCoisMacunCorrectrrect: false,
          isKremCorrect: false,
        },
        {
          answerText: "Çok fazla",
          isMacunCorrect: false,
          isKremCorrect: false,
        },
        { answerText: "Hayır", isMacunCorrect: true, isKremCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [macunscore, setMacunScore] = useState(0);

  const [kremscore, setKremScore] = useState(0);

  var targetElement = document.getElementById("image-macun");
  var targetElement2 = document.getElementById("image-krem");
  var targetElement3 = document.getElementById("image-genel");

  const handleAnswerOptionClick = (isMacunCorrect) => {
    if (isMacunCorrect) {
      setScore(score + 1);
      setMacunScore(macunscore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleAnswerOptionClickKrem = (isKremCorrect) => {
    if (isKremCorrect) {
      setScore(score + 1);
      setKremScore(kremscore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    if (macunscore > kremscore && currentQuestion > 2) {
      targetElement.style.display = "flex";
    }
    if (macunscore < kremscore && currentQuestion > 2) {
      targetElement2.style.display = "flex";
    }
    if (currentQuestion > 2) {
      targetElement3.style.display = "none";
    }
  };

  return (
    <div className="app">
      <img
        style={{ backgroundColor: "white" }}
        id="image-genel"
        className="image-anket"
        src="Curious-rafiki.png"
        alt="Açıklama"
      />

      <img
        style={{ display: "none", border: "double" }}
        id="image-krem"
        className="image-anket"
        src="https://hekimzade.com/cdn/shop/files/image001_300x.jpg?v=1703318966"
        alt="Açıklama"
      />
      <img
        style={{ display: "none", border: "double" }}
        id="image-macun"
        className="image-anket"
        src="https://hekimzade.com/cdn/shop/files/urun-07_75a61772-0e55-4104-9de5-64cbb2162ea6_1200x.jpg?v=1701948671"
        alt="Açıklama"
      />

      {showScore ? (
        <div>
          <div></div>
          <div className="score-section">
            %{macunscore * 25} macuna uygun, %{kremscore * 25} kreme uygun
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => {
                  handleAnswerOptionClick(answerOption.isMacunCorrect);
                  handleAnswerOptionClickKrem(answerOption.isKremCorrect);
                }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

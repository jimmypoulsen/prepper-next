"use client"

import React, { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [householdSize, setHouseholdSize] = useState("");
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAnswers = localStorage.getItem("answers");
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }

      const savedHouseholdSize = localStorage.getItem("householdSize");
      if (savedHouseholdSize) {
        setHouseholdSize(parseInt(savedHouseholdSize));
      }

      if (savedHouseholdSize) {
        setStep(1);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("householdSize", householdSize);
    }
  }, [householdSize]);

  const questionsArray = [
    [
      { type: "title", text: "Drikkevand" },
      { type: "question", text: `${(householdSize || 0) * 3 * 3} liter drikkevand` },
      { type: "question", text: "Evt. vand til husdyr" },
    ],
  ]

  const handleNextStep = () => {
    if (step === 0 && householdSize === "") {
      return;
    }

    setStep(step + 1);
  }

  const setAnswer = (questionIndex, answer) => {
    console.log("setting answer")
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });

    localStorage.setItem("answers", JSON.stringify({
      ...answers,
      [questionIndex]: answer,
    }));
  }

  return (
    <div className="container">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold italic text-center">
        PREPPER
        TJEKLISTEN
      </h1>

      <p className="text-center font-normal mt-12">
        Svært ved at danne dig et overblik over din beredskabsliste?
        <span className="text-orange-500"> Start her!</span>
      </p>

      <div className="w-full md:w-1/3 mx-auto mt-12">
        {step === 0 && (
          <div className="flex flex-col items-center gap-2">
            <label
              htmlFor="household"
              className="form-control-label"
            >
              Hvor mange er I i husstanden?
            </label>
            <input
              type="number"
              className="form-control"
              id="household"
              placeholder="4"
              value={householdSize}
              onInput={(e) => setHouseholdSize(parseInt(e.target.value) || "")}
              min="1"
              max="20" />
            <button
              className="btn btn-outline-primary w-full mt-1"
              onClick={() => handleNextStep(1)}
            >
              Start
            </button>
          </div>
        )}

        {step === 1 && (
          <>
            {questionsArray.map((questions, index1) => (
              <div key={index1} className="flex flex-col gap-2">
                {questions.map((question, index2) => (
                  <div key={index1 + index2}>
                    {question.type === "title" && (
                      <small className="font-semibold text-orange-500 w-full block text-center">
                        {question.text}
                      </small>
                    )}

                    {question.type === "question" && (
                      <div className="flex items-center justify-between gap-2">
                        <label className="form-control-label">
                          {question.text}
                        </label>

                        <input
                          type="checkbox"
                          checked={answers[index1 + index2] || false}
                          onChange={(e) => setAnswer(index1 + index2, e.target.checked)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

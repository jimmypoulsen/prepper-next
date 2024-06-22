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
    [
      { type: "title", text: "Mad" },
      { type: "question", text: "Mad til tre døgn, der er langtidsholdbart og let at tilberede" },
    ],
    [
      { type: "title", text: "Medicin og førstehjælp" },
      { type: "question", text: "Nødvendig medicin for husstanden" },
      { type: "question", text: "Førstehjælpskasse" },
      { type: "question", text: "Evt. jodtabletter for personer under 40 år samt gravide og ammende" },
    ],
    [
      { type: "title", text: "Hygiejneartikler" },
      { type: "question", text: "Toiletpapir" },
      { type: "question", text: "Hånddesinfektion" },
      { type: "question", text: "Bleer, bind og/eller tamponer eller andet relevant for din husstand" },
    ],
    [
      { type: "title", text: "Varme" },
      { type: "question", text: "Tæpper" },
      { type: "question", text: "Dyner" },
      { type: "question", text: "Varmt tøj" },
    ],
    [
      { type: "title", text: "Andre fornødenheder" },
      { type: "question", text: "Powerbank eller batteripakke til f.eks. mobiltelefon" },
      { type: "question", text: "Lommelygte" },
      { type: "question", text: "Batterier" },
      { type: "question", text: "Fysiske betalingskort (husk pinkode) og evt. kontanter i mønter og små sedler" },
      { type: "question", text: "Stearinlys og tændstikker" },
    ],
    [
      { type: "title", text: "Særlige behov" },
      { type: "question", text: "Jeg bor ikke udsat ift. f.eks. oversvømmelse. Hvis jeg gør, har jeg taget højde for det" },
      { type: "question", text: "Jeg kan hjælpe eller få hjælp af familie, naboer og venner" },
    ],
    [
      { type: "title", text: "Kommunikation" },
      { type: "question", text: "FM-radio, der kører på batterier/håndsving/solceller (eller evt. bilradio)" },
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

      <div className="flex flex-col items-center gap-3 w-full md:w-1/3 mx-auto mt-12">
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
              <div key={index1} className="flex flex-col gap-2 w-full">
                {questions.map((question, index2) => (
                  <div key={`question-${index1}-${index2}`}>
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
                          checked={answers[`question-${index1}-${index2}`] || false}
                          onChange={(e) => setAnswer(`question-${index1}-${index2}`, e.target.checked)}
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

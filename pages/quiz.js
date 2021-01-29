import React from 'react';
import db from '../db.json'

import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget/index'
import QuizBackground from '../src/components/QuizBackground'
import Button from '../src/components/Button/index'
import QuizLogo from '../src/components/QuizLogo'


function QuestionWidget({ question, totalQuestions, questionIndex }) {
    const questionId = `question__${questionIndex}`
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>
            <img
                alt="Decriçao"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                }}
                src={question.image} />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>
                <form>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative_${alternativeIndex}`;
                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                            >
                                <input
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio" />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                </form>
                <Button>
                    Confirmar
            </Button>
            </Widget.Content>
        </Widget>)
}


export default function QuizPage() {
    console.log('Perguntas criadas', db.questions);
    const totalQuestions = db.questions.length;
    const questionIndex = 0;
    const question = db.questions[questionIndex]
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <QuestionWidget
                    question={question}
                    totalQuestions={totalQuestions}
                    questionIndex={questionIndex} />
            </QuizContainer >
        </QuizBackground>
    );
}
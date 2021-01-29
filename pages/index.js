import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import { useRouter } from 'next/router'

import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget/index'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input/input'
import Button from '../src/components/Button/index'
import QuizLogo from '../src/components/QuizLogo'
import { useState } from 'react'


/* const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    background-position: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    ` */

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>#StarWars Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e){
              e.preventDefault();
              router.push(`quiz?name=${name}`);
            }}>
              <Input onChange={(e) => {setName(e.target.value)}}
              placeholder="Diz aí seu Nome" />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>The may the force be with you</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Jrolisilva" />
    </QuizBackground>
  )
}

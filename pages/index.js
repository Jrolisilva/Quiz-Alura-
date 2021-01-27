import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'


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

export const QuizContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Star Wars</h1>
          </Widget.Header>
          <Widget.Content>
            <p>The may the force be with you</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Star Wars</h1>
            <p>The may the force be with you</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Jrolisilva" />
    </QuizBackground>
  )
}

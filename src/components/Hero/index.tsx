import * as S from './styles';
import { Title, Subtitle, Text, Button, Image } from '../../styles/index';
import frontpage from '../../assets/frontpage.png';

const HeroSection = () => {
  return (
    <S.Hero>
      <S.HeroColumn>
        <Title>Welcome to the Bússola, Bitch!</Title>
        <Subtitle>Yo, this shit is the Bomb!</Subtitle>
        <Text>Over 60 units on all the grammar that you can possibly need, Bitch!</Text>
        <Button>Get Started</Button>
      </S.HeroColumn>
      <S.HeroColumn>
        <Image src={frontpage} alt="Frontpage" />
      </S.HeroColumn>
    </S.Hero>
  );
}

export default HeroSection;

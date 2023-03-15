import styled from 'styled-components';
import { Button } from '../utils/Button';
import IllustrationIntro from '../assets/images/illustration-intro.svg';

const StyledWrapper = styled.div`
  position: relative;
  height: 55rem;
  width: 100%;
  margin: 5.6rem;

  &:before {
    content: '';
    position: absolute;
    top: -180px;
    height: 110%;
    width: 100vw;
    background-image: url('/images/bg-tablet-pattern.svg');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 200% 100%;

    @media only screen and (max-width: 56.25em) {
      background-size: 100%;
      left: 15%;
      background-position: 0% -15%;
    }
  }

  @media only screen and (max-width: 56.25em) {
    height: 100%;
  }
`;

const StyledContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.2rem;
`;

const HeroText = styled.div`
  z-index: 1;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.darkGrayishBlue};
  font-weight: 400;
`;

const StyledHeading = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  line-height: 5.6rem;
  margin-bottom: 2.4rem;
`;

const HeroImage = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Hero = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <HeroText>
          <StyledHeading>
            Bring everyone together to build better products.
          </StyledHeading>
          <StyledParagraph>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </StyledParagraph>
          <Button>Get Started</Button>
        </HeroText>
        <HeroImage src={IllustrationIntro}></HeroImage>
      </StyledContent>
    </StyledWrapper>
  );
};

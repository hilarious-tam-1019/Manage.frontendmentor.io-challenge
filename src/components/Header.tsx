import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { Button } from '../utils/Button';

const navList = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  padding-top: 30px;
  width: 100%;
  height: 100%;
  max-width: 1140rem;
`;

const StyledList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
  gap: 1.6rem;
`;

const StyledAchorTag = styled.a`
  color: ${(props) => props.theme.darkBlue};
  font-weight: 500;
  cursor: default;

  &:hover {
    color: ${(props) => props.theme.darkGrayishBlue};
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <StyledWrapper>
      <a href="#">
        <img src={logo} alt="manage-logo"></img>
      </a>
      <StyledList>
        {navList.map((item) => (
          <StyledAchorTag>{item}</StyledAchorTag>
        ))}
      </StyledList>
      <Button>Get Started</Button>
    </StyledWrapper>
  );
};

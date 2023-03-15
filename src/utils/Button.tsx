import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: 'orange' | 'white';
  children?: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) =>
    props.color == 'orange' ? props.theme.brightRed : props.theme.white};
  color: ${(props) =>
    props.color == 'orange' ? props.theme.white : props.theme.brightRed};
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 700;
  padding: 1.2rem 3.2rem;
  border-radius: 2.2rem;
  box-shadow: 4px 6px 6px rgba(242, 95, 58, 0.2);
  transition: all 0.3s;

  &:hover {
    filter: brightness(1.4);
  }
`;

export const Button = ({ color = 'orange', children }: ButtonProps) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

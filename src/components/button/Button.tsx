export interface buttonProps {
  name: string;
}

const Button = ({ name }: buttonProps) => {
  return (
    <a href="#" className="button">
      {name}
    </a>
  );
};
export default Button;

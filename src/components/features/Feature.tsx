export interface featureProps {
  id: number;
  title: string;
  text: string;
}

const Feature = ({ id, title, text }: featureProps) => {
  return (
    <li>
      <h3 className="fs-600 fw-bold">{title}</h3>
      <p>{text}</p>
    </li>
  );
};
export default Feature;

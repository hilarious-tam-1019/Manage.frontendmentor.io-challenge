import Button from '../button/Button';
import illustrationIntro from '../../assets/images/illustration-intro.svg';

const Hero = () => {
  return (
    <div className="container">
      <div className="even-columns">
        <div>
          <h1 className="fs-primary-heading fw-bold">
            Bring everyone together to build better products
          </h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </p>
          <Button name="Get Started" />
        </div>
        <div>
          <img src={illustrationIntro} alt="illustration-intro"></img>
        </div>
      </div>
    </div>
  );
};
export default Hero;

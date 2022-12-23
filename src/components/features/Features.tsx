import Feature, { featureProps } from './Feature';

const features = [
  {
    id: 1,
    title: 'Track company-wide progress',
    text: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  },
  {
    id: 2,
    title: 'Advanced built-in reports',
    text: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  },
  {
    id: 3,
    title: 'Everything you need in one place',
    text: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
];

const Features = () => {
  return (
    <div className="container">
      <div className="even-columns">
        <div>
          <h2 className="fs-secondary-heading fw-bold">
            What's different about Manage?
          </h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div>
          <ul role="list">
            {features.map((feature: featureProps) => (
              <Feature {...feature}></Feature>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Features;

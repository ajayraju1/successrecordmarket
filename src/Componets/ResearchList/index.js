import "./index.css";

const ResearchList = (props) => {
  const { reseatchItem } = props;

  const { heading, lists } = reseatchItem;

  return (
    <div className="research-lists-heading-container">
      <h5 className="research-list-heading">{heading}</h5>
      <ul className="research-list-container">
        {lists.map((eachItem) => (
          <li className="research-list-item">{eachItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchList;

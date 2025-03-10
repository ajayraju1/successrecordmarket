import "./index.css";
import ResearchList from "../ResearchList";

const researchLists = [
  {
    heading: "Real Estate Lists",
    lists: [
      "We save your time and money",
      "All the research we do is from public and court record sources with a great domain knowledge",
    ],
  },
  {
    heading: "Data collection microsoft excel data cleaning",
    lists: [
      "We Provide th data in microsoft excel with required costomization",
      "It makes your Work easier",
    ],
  },

  {
    heading: "LEAD GENERATION",
    lists: [
      "53+ Real Estate lists",
      "We generate Quality leads & are recently updated leads with less invest more leads potentially converts deals",
      "Effective lead generation can expand your market presence and reach to deals with your marketing",
    ],
  },
  {
    heading: "Property Analysis",
    lists: [
      "Happy to do the crucial analysis process, Market analysis, Propery condition, Finanical analysis, CashFlow comp's, Revenue, Coprate, ROI, Purchase Price",
    ],
  },
];

const Research = () => {
  return (
    <div className="research-container">
      <h1 className="research-heading">Our Services</h1>
      <div className="research-lists-container">
        {researchLists.map((eachItem) => (
          <ResearchList reseatchItem={eachItem} key={eachItem.heading} />
        ))}
      </div>
    </div>
  );
};

export default Research;

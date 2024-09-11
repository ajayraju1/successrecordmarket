import "./index.css";
import keyboardpressing from "../../assets/images/keyboardpressing.jpg";
import leadGenerationWithPeople from "../../assets/images/leadGenerationWithPeople.jpg";
import leadGenerationWithBlubHeads from "../../assets/images/leadGenerationWithBlubHeads.jpg";
import smallHouseWithKeys from "../../assets/images/smallHouseWithKeys.jpg";
import turnIdeasIntoReality from "../../assets/images/turnIdeasIntoReality.jpg";
import getMoreLeads from "../../assets/images/getMoreLeads.jpg";
import leadGenerationWithThreePeople from "../../assets/images/leadGenerationWithThreePeople.jpg";
import keysInHand from "../../assets/images/keysInHand.jpg";
import leadGenerationWithKeyPoints from "../../assets/images/leadGenerationWithKeyPoints.jpg";

const Home = () => (
  <div className="home-container">
    <img
      src={keyboardpressing}
      className="home-body-imgs"
      alt="keyboardpressing"
    />
    <h1 className="home-heading">
      Best platform to record your Succes with our real estate records
    </h1>
    <div className="home-va-heading-con">
      <h1 className="va-heading">Real Estate Lists and Service</h1>
      <br />
      <br />
      <h1 className="va-heading">
        We Strive to meet the needs of out clients in a Professional manner in
        order to provide real estate help.
      </h1>
    </div>
    <button className="va-btn" type="button">
      Virtual Assistant
    </button>

    <img
      src={leadGenerationWithPeople}
      className="home-body-imgs"
      alt="leadGenerationWithPeople"
    />
    <img
      src={smallHouseWithKeys}
      className="home-body-imgs"
      alt="smallHouseWithKeys"
    />
    <img
      src={leadGenerationWithBlubHeads}
      className="home-body-imgs"
      alt="leadGenerationWithBlubHeads"
    />
    <img
      src={turnIdeasIntoReality}
      className="home-body-imgs"
      alt="turnIdeasIntoReality"
    />
    <img
      src={leadGenerationWithThreePeople}
      className="home-body-imgs"
      alt="leadGenerationWithThreePeople"
    />
    <img src={getMoreLeads} className="home-body-imgs" alt="getMoreLeads" />
    <img src={keysInHand} className="home-body-imgs" alt="keysInHand" />
    <img
      src={leadGenerationWithKeyPoints}
      className="home-body-imgs"
      alt="leadGenerationWithKeyPoints"
    />
  </div>
);

export default Home;

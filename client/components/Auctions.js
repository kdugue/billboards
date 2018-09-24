import React from "react";
import Countdown from "react-countdown-now";
import { Link } from "react-router-dom";

const Auctions = () => {
  return (
    <div className="auctions-page">
      <div className="auctions-live">
        <b>
          <u>LIVE</u>
        </b>
        <div>
          <p>Tennis World: </p>
          <p>
            <Countdown date={"Mon, 24 Sep 2018 15:10:00"} />
          </p>
          <p>
            <Link to="/auctions/1">View auction</Link>
          </p>
        </div>
      </div>

      <div>
        <b>
          <u>UPCOMING</u>
        </b>
        <p>
          Pitchfork: <Countdown date={"Wed, 26 Sep 2018 21:59:00"} />{" "}
        </p>
        <p>
          NY Times: <Countdown date={"Thurs, 27 Sep 2018 21:59:00"} />{" "}
        </p>
      </div>
    </div>
  );
};

export default Auctions;

import React from "react";
import Countdown from "react-countdown-now";

const Auctions = () => {
  return (
    <div>
      <div>
        Live
        <p>
          Tennis World: <Countdown date={"Tues, 25 Sep 2018 21:59:00"} />
        </p>
      </div>

      <div>
        Upcoming
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

import React from "react";

const About = () => {
  return (
    <div>
      <p className="about-page">
        Billboards is an auction-based advertisements marketplace built on the
        Ethereum blockchain
      </p>

      <p className="about-page">Built/Works with the following technologies:</p>
      <p>
        <ul>
          <li>
            web3.js - portal/window into the Ethereum network. Allow to make
            transactions on the Ethereum network
          </li>
          <li>
            Metamask- browser extension tht allows people to interact with the
            Ethereum network
          </li>
          <li>
            smart contracts - applications that run on the Ethereum Virtual
            Machine (EVM). <br />
            Ethereum virtual machine is the runtime environemtn for smart
            contracts in Ethereum
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;

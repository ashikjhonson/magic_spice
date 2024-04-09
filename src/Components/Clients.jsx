import React from "react";
import cli from "./Css/client.module.css";

function Client() {
  return (
    <div className={cli.trusted_clients}>
      <h5>Trusted by Over 50+ Client Nationwide</h5>
      <div className={cli.client_scroll_container}></div>
      <div className={cli.deal_of_the_day}></div>
    </div>
    
  );
}
export default Client;

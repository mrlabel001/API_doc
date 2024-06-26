import './Endpoint.css';
import pic32 from "./assets/get total stats.png"
import pic33 from "./assets/get month stats.png"

function Stats() {

    return (
        <>
            <h3>Stats</h3>
            <h4>Totals</h4>
            <code>GET /stats/total</code><br />
            <strong>Parameters</strong>
            <p><strong>Response</strong></p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code><br />
            <img src={pic32} ></img>
            <br />
            <h4>Month</h4>
            <code>GET /stats/month</code><br />
            <strong>Parameters</strong>
            <p><strong>Response</strong></p>
            <code>200 OK<br />X-Ratelimit-Limit: 1000<br />X-Ratelimit-Remaining: 999</code><br />
            <img src={pic33} ></img>
            <br />
        </>
    );
}

export default Stats;

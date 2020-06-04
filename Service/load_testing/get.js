import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

// A simple counter for http requests
export const requests = new Counter("http_reqs");

export let options = {
  ext: {
    loadimpact: {
      // Test runs with the same name groups test runs together
      name: "--vus 50 --duration 60s"
    }
  },
  stages: [
    { duration: '2m', target: 1000 },
    { duration: '5m', target: 1000 },
    { duration: '3m', target: 1100 },
    { duration: '3m', target: 1200 },
    { duration: '3m', target: 1300 },
    { duration: '3m', target: 1400 },
    { duration: '3m', target: 1500 }
  ]
};


export default function() {
  let propertyid = Math.floor(Math.random() * 10000);
  let res = http.get(`http://localhost:3003/properties/${propertyid}/images`);
  check(res, {
    "Error Rate": (r) => r.status !== 200,
    "Transaction time under 2000ms": (r) => r.timings.duration < 2000
  })
  sleep(1);
}

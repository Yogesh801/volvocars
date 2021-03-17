import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

  const BASE_URL = 'http://3.142.83.193:7002/api/cars';

	export let options = {
		vus: 1,
		iterations: 1,
	};
  let myTrend = new Trend('my_trend')

export default function () {
	  myTrend.add(1);
	
  var payload = JSON.stringify
  ({
    model: 'XC300',
  });
  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  check(http.post(`${BASE_URL}`, payload, params),
  {
    'status is 200': (r) => r.status == 200,
  })
  sleep(10);
   
  var payload1 = JSON.stringify
  ({
    model: 'XC302',  
  });
  var params1 = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  check(http.put(`${BASE_URL}/2`, payload1, params1),
  {
    'status is 200': (r) => r.status == 200,
  })
  sleep(10);
  

  let res1 = http.get(`${BASE_URL}/3`);
   check(res1, { 'status was 200': (r) => r.status == 200 });
  
  


}

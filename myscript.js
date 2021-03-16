import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

	export let options = {
		vus: 1,
		iterations: 1,
	};
		let myTrend = new Trend('my_trend')
			export default function () {
	
				myTrend.add(1);
	
  var url = 'http://localhost:8080/api/cars';
  var payload = JSON.stringify
  ({
    model: 'XC300',
  });
  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  check(http.post(url, payload, params),
  {
    'status is 200': (r) => r.status == 200,
  })
  sleep(10);
   
  var url1 = 'http://localhost:8080/api/cars/55';
  var payload1 = JSON.stringify
  ({
    model: 'XC302',  
  });
  var params1 = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  check(http.put(url1, payload1, params1),
  {
    'status is 200': (r) => r.status == 200,
  })
  sleep(10);
  

  let res1 = http.get('http://localhost:8080/api/cars/10');
   check(res1, { 'status was 200': (r) => r.status == 200 });
  
  
  let res = http.del('http://localhost:8080/api/cars/113');
  check(res, { 'status was 200': (r) => r.status == 200 });


}


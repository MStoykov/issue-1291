import http from 'k6/http';
import {check} from 'k6';

var target = "nginx:9000";
if (__ENV.target !== undefined) {
    target = __ENV.target;
}
export default function () {
  const response = http.get('http://' + target);

  check(response, {
    'status was 200': r => r.status === 200,
  });
}

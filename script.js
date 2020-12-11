import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export default function () {
  let url = 'http://localhost:3001/api/homes/10/photos';
  let params = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  check(http.get(url, params), {
    'status is 200': (res) => res.status === 200,
  }) || errorRate.add(1);
}
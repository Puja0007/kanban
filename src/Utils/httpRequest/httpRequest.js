import axios from 'axios';
import _ from 'lodash';

export const httpRequest = (url, config) => {
  const requestType = config.method.toLowerCase();
  const args = [url];
  if (requestType === 'post' || requestType === 'put') {
    args.push(config.body || undefined);
  }
  const headers = _.cloneDeep(config.headers || {});

 

  args.push({ headers });

  return axios[requestType](...args).then(function (response) {
    return response.data;
  });
};

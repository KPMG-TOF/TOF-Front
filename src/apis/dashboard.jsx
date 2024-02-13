import api  from './index';

export const ref_analysis = (ref_id) =>
  api.get(`/api/v1/main/analysis/${ref_id}`);

export const fileoutput = () =>
  api.get(`/api/v1/upload/doc/file`);

export const linkoutput = () =>
  api.get(`/api/v1/upload/doc/link`);
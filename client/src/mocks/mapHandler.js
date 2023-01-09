import { rest } from 'msw';
import { ApiUrl } from '../constants/ApiUrl';
import { MapMarker } from './data/map/MapMarker';
import { MapCafeInfo } from './data/map/MapCafeInfo';

export const mapHandler = [
  rest.get(process.env.REACT_APP_SERVER_URL + ApiUrl.CAFE_INFO + '/:region', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MapMarker[req.params.region]));
  }),
  rest.get(process.env.REACT_APP_SERVER_URL + ApiUrl.RECRUITING_INFO + '/:cafeId', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MapCafeInfo[req.params.cafeId]));
  }),
];

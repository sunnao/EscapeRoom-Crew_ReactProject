import { rest } from 'msw';
import { ApiUrl } from '../constants/ApiUrl';
import { MapMatchingPost } from './data/map/MapMatchingPost';

export const handlers = [
  rest.get(process.env.REACT_APP_SERVER_URL + ApiUrl.CAFE_INFO + '/:region', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MapMatchingPost[req.params.region]));
  }),
];

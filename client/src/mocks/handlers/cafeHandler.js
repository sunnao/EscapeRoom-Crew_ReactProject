import { rest } from 'msw';
import { ApiUrl } from '../../constants/ApiUrl';
import { CafeInfoAll } from '../data/cafe/CafeInfoAll';

export const cafeHandler = [
  rest.get(process.env.REACT_APP_SERVER_URL + ApiUrl.ALL_CAFE_DATA, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CafeInfoAll));
  }),
];

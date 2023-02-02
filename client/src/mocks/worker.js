import { setupWorker } from 'msw';
import { mapHandler } from './handlers/mapHandler';
import { listHandler } from './handlers/listHandler';
import { cafeHandler } from './handlers/cafeHandler';

export const worker = setupWorker(...mapHandler, ...listHandler, ...cafeHandler);

import { setupWorker } from 'msw';
import { mapHandler } from './mapHandler';

export const worker = setupWorker(...mapHandler);

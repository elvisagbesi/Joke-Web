import { asyncPipe } from './async-pipe';

const toJson = (res: Response) => res.json();

const getRequest = asyncPipe(fetch, toJson);

export default getRequest;

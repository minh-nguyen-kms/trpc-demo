import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../trpc-server/routers/_app';
import { transformer } from '../../trpc-server/transformer';

const BASE_URL = `/api/trpc`;
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: BASE_URL,
    }),
  ],
  transformer
});
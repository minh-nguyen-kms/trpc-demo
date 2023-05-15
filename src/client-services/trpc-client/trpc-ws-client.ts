import { createTRPCProxyClient, createWSClient, wsLink } from '@trpc/client';
import { AppRouter } from '../../trpc-server/routers/_app';
import { transformer } from '../../trpc-server/transformer';

// create persistent WebSocket connection
const wsClient = createWSClient({
    url: `ws://localhost:3301`,
  });
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    wsLink({
        client: wsClient,
      }),
  ],
  transformer
});
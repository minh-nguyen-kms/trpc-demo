/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';
import { todoRouters } from './todo-routers';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  todos: todoRouters,
});

export type AppRouter = typeof appRouter;
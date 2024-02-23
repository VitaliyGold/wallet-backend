import type { FastifyRequest } from "fastify";

import { GetExpensesQuery } from "../expenses.types";

type GetTotalExpensesQuery = Omit<GetExpensesQuery, 'limit' | 'offset'>;

type GetTotalExpensesRequest = FastifyRequest<{ Querystring: GetTotalExpensesQuery }>;


export {
    GetTotalExpensesRequest,
    GetTotalExpensesQuery,
}
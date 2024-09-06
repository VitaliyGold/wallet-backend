import type { FastifyRequest } from "fastify";

import { GetExpensesQuery } from "../expenses.types";

type GetTotalExpensesRequest = FastifyRequest<{ Querystring: GetExpensesQuery }>;


export type {
    GetTotalExpensesRequest,
}
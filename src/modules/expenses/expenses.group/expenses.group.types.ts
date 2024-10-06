import type { FastifyRequest } from "fastify";

import { ExpensesData } from "@prisma/client";

import { GetExpensesQuery, Expense } from "../expenses.types";

type GroupBy = 'category';

type GetGroupExpensesQuery = GetExpensesQuery & { groupBy: GroupBy };

type GetGroupExpensesRequest = FastifyRequest<{ Querystring: GetGroupExpensesQuery }>;

type GroupedExpenses = Array<Record<string, ExpensesData[]>>

export type {
    GroupBy,
    GetGroupExpensesQuery,
    GetGroupExpensesRequest,
    GroupedExpenses,
}
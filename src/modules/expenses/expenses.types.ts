import type { FastifyRequest } from "fastify";

interface GetExpensesQuery {
    limit?: number;
    offset?: number;
    name?: string;
    categories?: string[];
    tags?: string[];
    startDate?: string;
    endDate?: string;
}

interface Expense {
    expenses_id: string;
    amount: number,
    date: string,
    name: string,
    categories: string[],
    tags: string[]
}

type CreateExpenseDto = Omit<Expense, 'expenses_id'>;

type GetExpensesRequest = FastifyRequest<{ Querystring: GetExpensesQuery }>;

type CreateExpensesRequest = FastifyRequest<{ Body: { data: CreateExpenseDto[] } }>;

type DeleteExpenseRequest = FastifyRequest<{ Querystring: Pick<Expense, 'expenses_id'> }>;

type PatchExpenseRequest = FastifyRequest<{ Body: { data: Expense } }>

export type {
    GetExpensesQuery,
    CreateExpenseDto,
    ChangeExpenseDto,
    Expense,
    GetExpensesRequest,
    CreateExpensesRequest,
    DeleteExpenseRequest,
    PatchExpenseRequest
}
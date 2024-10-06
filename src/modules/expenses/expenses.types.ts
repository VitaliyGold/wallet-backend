import type { FastifyRequest } from "fastify";

interface GetPaginationExpensesQuery {
    limit?: number;
    offset?: number;
    name?: string;
    categories?: string[];
    tags?: string[];
    startDate?: string;
    endDate?: string;
    direction?: ExpensesDirection;
}

type ExpensesDirection = 'all' | 'incomes' | 'expenses';

interface Expense {
    expenses_id: string;
    amount: number,
    date: string,
    name: string,
    category_id: string | null,
    tag_id: string | null,
}

type CreateExpenseDto = Omit<Expense, 'expenses_id'>;

type GetExpensesRequest = FastifyRequest<{ Querystring: GetPaginationExpensesQuery }>;

type CreateExpensesRequest = FastifyRequest<{ Body: { data: CreateExpenseDto[] } }>;

type DeleteExpenseRequest = FastifyRequest<{ Querystring: Pick<Expense, 'expenses_id'> }>;

type PatchExpenseRequest = FastifyRequest<{ Body: { data: Expense } }>

type GetExpensesQuery = Omit<GetPaginationExpensesQuery, 'limit' | 'offset'>

export type {
    GetPaginationExpensesQuery,
    GetExpensesQuery,
    CreateExpenseDto,
    Expense,
    ExpensesDirection,
    GetExpensesRequest,
    CreateExpensesRequest,
    DeleteExpenseRequest,
    PatchExpenseRequest
}
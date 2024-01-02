import type { FastifyReply } from 'fastify';

import { ExpenseService } from './expenses.service';
import { GetExpensesRequest, CreateExpensesRequest, DeleteExpenseRequest, PatchExpenseRequest } from './expenses.types';
import { createPagination } from './expenses.mappers';

class Controller {
	getExpenses(req: GetExpensesRequest, reply: FastifyReply) {
        const paginationParams = createPagination(req.query);
        return ExpenseService.getExpenses(paginationParams, reply);
    }

    createExpenses(req: CreateExpensesRequest, reply: FastifyReply) {
        return ExpenseService.addExpenses(req.body.data, reply);
    }

    deleteExpense(req: DeleteExpenseRequest, reply: FastifyReply) {
        return ExpenseService.deleteExpense(req.query.expenses_id, reply);
    }

    patchExpense(req: PatchExpenseRequest, reply: FastifyReply) {
        return ExpenseService.patchExpense(req.body.data, reply);
    }
}

const ExpensesController = new Controller();

export {
    ExpensesController,
};
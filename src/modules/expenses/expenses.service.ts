import { FastifyReply } from "fastify";
import { randomUUID } from "node:crypto";

import { GetPaginationExpensesQuery, CreateExpenseDto, Expense } from "./expenses.types";
import { ExpenseRepository } from './expenses.repository';
import { createResponsePagination } from "./expenses.mappers";

class Service {
    async getExpenses(params: Required<GetPaginationExpensesQuery>, reply: FastifyReply) {
        const expenses = await ExpenseRepository.getExpenses(params);
        reply.send(createResponsePagination(expenses[0], expenses[1]));
    }

    async deleteExpense(expenseId: string, reply: FastifyReply) {
        const removedExpense = await ExpenseRepository.deleteExpense(expenseId);
        reply.send(removedExpense);
    }

    async patchExpense(expense: Expense, reply: FastifyReply) {
        const patchedExpenses = await ExpenseRepository.changeExpense(expense);
        reply.send(patchedExpenses);
    }

    async addExpenses(data: CreateExpenseDto[], reply: FastifyReply) {
        const expensesWithIds = data.map<Expense>(expense => ({ ...expense, expenses_id: randomUUID(), category_id: expense.category_id ?? null, tag_id: expense.tag_id ?? null }))

        const createdExpenses = await ExpenseRepository.createExpenses(expensesWithIds);
        reply.status(201).send(createdExpenses);
    }

}

const ExpenseService = new Service();

export {
    ExpenseService,
}
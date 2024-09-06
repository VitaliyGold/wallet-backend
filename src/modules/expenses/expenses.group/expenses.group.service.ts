import { FastifyReply } from "fastify";

import type { GetGroupExpensesQuery } from "./expenses.group.types";
import { ExpensesGroupRepository } from './expenses.group.repository'

const simpleDate = [
    {
        "category_id": "8033eb1f-1b06-4df9-a994-1aed63cba823",
        "expenses": [
            {
                "expenses_id": "fe6afa22-d04c-42c0-9e0b-f60b73b722e4",
                "amount": -33000,
                "date": "2024-08-12T00:00:00",
                "name": "Квартира"
            }
        ]
    },
]


class Service {
    async getExpenseWithGroup(params: Required<GetGroupExpensesQuery>, reply: FastifyReply) {
        const expenseWithGroup = await ExpensesGroupRepository.getCategoryWithGroup(params);
        reply.send(expenseWithGroup);
    }
};

const ExpensesGroupService = new Service();

export {
    ExpensesGroupService,
}
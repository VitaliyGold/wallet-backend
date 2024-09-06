import { FastifyReply } from "fastify";
import { ExpensesTotalRepository } from "./expenses.total.repository";
import { GetExpensesQuery } from "../expenses.types";

class Service {
    async getExpensesTotal(params: Required<GetExpensesQuery>, reply: FastifyReply) {
        const expensesTotal = await ExpensesTotalRepository.getExpensesTotal(params);
        reply.send({ total: expensesTotal._sum.amount ?? 0 });
    }

}

const ExpensesTotalService = new Service();

export {
    ExpensesTotalService,
}

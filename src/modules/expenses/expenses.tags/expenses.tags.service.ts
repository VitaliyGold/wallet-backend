import { FastifyReply } from "fastify";
import { ExpensesTagsRepository } from "./expenses.tags.repository";

class Service {
    async addTagToExpense(expense_id: string, tag_id: string, reply: FastifyReply) {
        const createdTag = await ExpensesTagsRepository.addTagToExpense(expense_id, tag_id);

        reply.send(createdTag)
    }

    async removeTagFromExpense(expense_id: string, reply: FastifyReply) {
        const removedTag = await ExpensesTagsRepository.removeTagFromExpense(expense_id);

        reply.send(removedTag);
    }
}

const ExpensesTagsService = new Service();

export {
    ExpensesTagsService,
}

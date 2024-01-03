import { FastifyReply } from "fastify";
import { ExpensesCategoriesRepository } from "./expenses.category.repository";

class Service {
    async addCategoryToExpense(expense_id: string, category_id: string, reply: FastifyReply) {
        const createdCategory = await ExpensesCategoriesRepository.addCategoryToExpense(expense_id, category_id);

        reply.send(createdCategory)
    }

    async removeCategoryFromExpense(expense_id: string, category_id: string, reply: FastifyReply) {
        const removedCategory = await ExpensesCategoriesRepository.removeCategoryFromExpense(expense_id, category_id);

        reply.send(removedCategory);
    }
}

const ExpensesCategoriesService = new Service();

export {
    ExpensesCategoriesService,
}

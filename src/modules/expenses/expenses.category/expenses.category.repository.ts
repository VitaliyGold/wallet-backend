import { InstancePrisma } from "../../../utils/prismaClient";

class Repository {
    addCategoryToExpense(expenses_id: string, category_id: string) {
        return InstancePrisma.categoryExpenseLinks.create({
            data: {
                expenses_id,
                category_id,
            }
        })
    }

    removeCategoryFromExpense(expenses_id: string, category_id: string) {
        return InstancePrisma.categoryExpenseLinks.delete({
            where: {
                expenses_id_category_id: {
                    expenses_id,
                    category_id,
                }
            }
        })
    }
}

const ExpensesCategoriesRepository = new Repository();

export {
    ExpensesCategoriesRepository
}
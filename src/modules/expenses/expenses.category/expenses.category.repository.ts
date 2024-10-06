import { InstancePrisma } from "../../../utils/prismaClient";

class Repository {
    addCategoryToExpense(expenses_id: string, category_id: string) {
        return InstancePrisma.expensesData.update({
            where: {
                expenses_id,
            },
            data: {
                category_id,
            }
        })
    }

    removeCategoryFromExpense(expenses_id: string) {
        return InstancePrisma.expensesData.update({
            where: {
                expenses_id,
            },
            data: {
                category_id: null,
            }
        })
    }
}

const ExpensesCategoriesRepository = new Repository();

export {
    ExpensesCategoriesRepository
}
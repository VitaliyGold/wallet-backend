import { InstancePrisma } from "../../../utils/prismaClient";

class Repository {
    addTagToExpense(expenses_id: string, tag_id: string) {
        return InstancePrisma.expensesData.update({
            where: {
                expenses_id,
            },
            data: {
                tag_id,
            }
        })
    }

    removeTagFromExpense(expenses_id: string) {
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

const ExpensesTagsRepository = new Repository();

export {
    ExpensesTagsRepository
}
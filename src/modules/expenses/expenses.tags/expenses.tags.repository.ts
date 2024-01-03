import { InstancePrisma } from "../../../utils/prismaClient";

class Repository {
    addTagToExpense(expenses_id: string, tag_id: string) {
        return InstancePrisma.tagExpenseLinks.create({
            data: {
                expenses_id,
                tag_id,
            }
        })
    }

    removeTagFromExpense(expenses_id: string, tag_id: string) {
        return InstancePrisma.tagExpenseLinks.delete({
            where: {
                expenses_id_tag_id: {
                    expenses_id,
                    tag_id,
                }
            }
        })
    }
}

const ExpensesTagsRepository = new Repository();

export {
    ExpensesTagsRepository
}
import { InstancePrisma } from "../../../utils/prismaClient";

import { GetGroupExpensesQuery, GroupedExpenses } from "./expenses.group.types";

class Repository {
    getCategoryWithGroup(params: Required<GetGroupExpensesQuery>): Promise<GroupedExpenses> {
        return InstancePrisma.$queryRawUnsafe(`
            SELECT 
                category_id,
                SUM(amount) AS category_total_amount,
                json_agg(row_to_json(ed)) as expenses
            FROM "ExpensesData" ed
            WHERE ed.date BETWEEN $1::timestamp AND $2::timestamp
            GROUP BY category_id;
            `, params.startDate, params.endDate);
    };
};

const ExpensesGroupRepository = new Repository();

export {
    ExpensesGroupRepository,
}
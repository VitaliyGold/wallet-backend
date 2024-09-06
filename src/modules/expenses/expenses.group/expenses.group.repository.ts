import { InstancePrisma } from "../../../utils/prismaClient";

import { GetGroupExpensesQuery, GroupedExpenses } from "./expenses.group.types";

class Repository {
    getCategoryWithGroup(params: Required<GetGroupExpensesQuery>): Promise<GroupedExpenses> {
        console.log(params)
        // @ts-ignore
        return InstancePrisma.$queryRawUnsafe(`
            SELECT 
                c.category_id, 
                json_agg(json_build_object(
                'expenses_id', e.expenses_id,
                'amount', e.amount,
                'date', e.date,
                'name', e.name
                )) AS expenses
            FROM 
                "CategoryExpenseLinks" c
            JOIN 
                "ExpensesData" e ON c.expenses_id = e.expenses_id
            WHERE 
                e.date BETWEEN $1::timestamp AND $2::timestamp
                AND e.amount < 0
            GROUP BY 
                c.category_id;
        `, params.startDate, params.endDate);
    }
};

const ExpensesGroupRepository = new Repository();

export {
    ExpensesGroupRepository,
}
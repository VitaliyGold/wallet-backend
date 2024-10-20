import type { ExpensesDirection } from "./expenses.types";

// подумать где лучше хранить подобные функции

const getExpensesFiltersBuilder = (category_ids: string[], tags: string[]) => {
    const filters = {};

    if (category_ids.length) {
        filters['category_id'] = {
            in: category_ids
        }
    }
    if (tags.length) {
        filters['tag'] = {
            some: {
                tag_id: {
                    in: tags,
                },
            }
        }
    }

    
 
    return filters;
};


const getAmountFilterBilder = (direction: ExpensesDirection) => {
    switch(direction) {
        case 'expenses':
            return {
                amount: {
                    lt: 0,
                }
            }
        case 'incomes': {
            return {
                amount: {
                    gt: 0,
                }
            }
        }
        default:
            return {};
    }
}

export {
    getExpensesFiltersBuilder,
    getAmountFilterBilder,
}
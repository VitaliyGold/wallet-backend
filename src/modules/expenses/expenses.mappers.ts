import { GetExpensesQuery } from './expenses.types';

const createPagination = (query: GetExpensesQuery): Required<GetExpensesQuery> => {
    return {
        name: String(query.name) ?? '',
        limit: Number(query.limit) ?? 50,
        offset: Number(query.offset) ?? 0,
        categories: query.categories ?? [],
        tags: query.tags ?? []

    }
}

export {
    createPagination,
}
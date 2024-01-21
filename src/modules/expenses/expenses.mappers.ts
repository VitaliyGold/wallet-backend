import { GetExpensesQuery } from './expenses.types';

const createParamsPagination = (query: GetExpensesQuery): Required<GetExpensesQuery> => {
    return {
        name: String(query.name) ?? '',
        limit: Number(query.limit) ?? 50,
        offset: Number(query.offset) ?? 0,
        categories: query.categories ?? [],
        tags: query.tags ?? [],
        startDate: query.startDate ?? new Date(0).toISOString(),
        endDate: query.endDate ?? new Date().toISOString(),
    }
}

const createResponsePagination = <T>(data: T, total: number) => {
    return {
        data,
        total,
    }
}

export {
    createParamsPagination,
    createResponsePagination,
}
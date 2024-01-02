import { GetCategoriesQuery } from './categories.types';

const createPagination = (query: GetCategoriesQuery): Required<GetCategoriesQuery> => {
    return {
        name: String(query.name) ?? '',
    }
}

export {
    createPagination,
}
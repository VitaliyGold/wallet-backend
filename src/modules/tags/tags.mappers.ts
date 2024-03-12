import { GetTagsQuery } from './tags.types';

const createPagination = (query: GetTagsQuery): Required<GetTagsQuery> => {
    return {
        name: query.name ?? '',
    }
}

export {
    createPagination,
}
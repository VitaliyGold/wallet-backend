import type { FastifyReply } from 'fastify';

import { CategoriesService } from './categories.service';
import { GetCategoriesRequest, CreateCategoryRequest, DeleteCategoryRequest, PatchCategoryRequest } from './categories.types';
import { createPagination } from './categories.mappers';

class Controller {
	getCategories(req: GetCategoriesRequest, reply: FastifyReply) {
        const paginationParams = createPagination(req.query);
        return CategoriesService.getCategories(paginationParams, reply);
    }

    createCategory(req: CreateCategoryRequest, reply: FastifyReply) {
        return CategoriesService.addCategory(req.body.data, reply);
    }

    deleteCategory(req: DeleteCategoryRequest, reply: FastifyReply) {
        return CategoriesService.deleteCategory(req.query.category_id, reply);
    }

    patchCategory(req: PatchCategoryRequest, reply: FastifyReply) {
        return CategoriesService.patchCategory(req.body.data, reply);
    }
}

const CategoriesController = new Controller();

export {
    CategoriesController,
};
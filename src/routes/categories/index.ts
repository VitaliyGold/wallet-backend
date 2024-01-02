import { FastifyPluginAsync } from "fastify";

import { CategoriesController } from "../../modules/categories";
import type { GetCategoriesRequest, CreateCategoryRequest, DeleteCategoryRequest, PatchCategoryRequest } from '../../modules/categories';

const CategoriesRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', {}, (req: GetCategoriesRequest, reply) => {
    return CategoriesController.getCategories(req, reply);
  });

  fastify.post('/', {}, (req: CreateCategoryRequest, reply) => {
    return CategoriesController.createCategory(req, reply);
  });

  fastify.delete('/', {}, (req: DeleteCategoryRequest, reply) => {
    return CategoriesController.deleteCategory(req, reply);
  });

  fastify.patch('/', {}, (req: PatchCategoryRequest, reply) => {
    return CategoriesController.patchCategory(req, reply);
  });
}

export default CategoriesRoute;
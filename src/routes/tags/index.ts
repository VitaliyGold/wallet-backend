import { FastifyPluginAsync } from "fastify";

import { TagsController } from "../../modules/tags";
import { GetTagsRequest, CreateTagRequest, DeleteTagRequest, PatchTagRequest } from '../../modules/tags';

const ExpensesRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', {}, (req: GetTagsRequest, reply) => {
    return TagsController.getTags(req, reply);
  });

  fastify.post('/', {}, (req: CreateTagRequest, reply) => {
    return TagsController.createTag(req, reply);
  });

  fastify.delete('/', {}, (req: DeleteTagRequest, reply) => {
    return TagsController.deleteTag(req, reply);
  });

  fastify.patch('/', {}, (req: PatchTagRequest, reply) => {
    return TagsController.patchTag(req, reply);
  });
}

export default ExpensesRoute;
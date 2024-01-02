import type { FastifyReply } from 'fastify';

import { TagsService } from './tags.service';
import { GetTagsRequest, CreateTagRequest, DeleteTagRequest, PatchTagRequest } from './tags.types';
import { createPagination } from './tags.mappers';

class Controller {
	getTags(req: GetTagsRequest, reply: FastifyReply) {
        const paginationParams = createPagination(req.query);
        return TagsService.getTag(paginationParams, reply);
    }

    createTag(req: CreateTagRequest, reply: FastifyReply) {
        return TagsService.addTag(req.body.data, reply);
    }

    deleteTag(req: DeleteTagRequest, reply: FastifyReply) {
        return TagsService.deleteTag(req.query.tag_id, reply);
    }

    patchTag(req: PatchTagRequest, reply: FastifyReply) {
        return TagsService.patchTag(req.body.data, reply);
    }
}

const TagsController = new Controller();

export {
    TagsController,
};
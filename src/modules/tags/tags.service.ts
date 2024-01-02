import { FastifyReply } from "fastify";

import { GetTagsQuery, CreateTagDto, Tag } from "./tags.types";
import { TagsRepository } from './tags.repository';

class Service {
    async getTag(params: Required<GetTagsQuery>, reply: FastifyReply) {
        const tag = await TagsRepository.getTags(params.name);
        reply.send(tag);
    }

    async deleteTag(tagId: string, reply: FastifyReply) {
        const removed = await TagsRepository.deleteTag(tagId);
        reply.send(removed);
    }

    async patchTag(tag: Tag, reply: FastifyReply) {
        const patchedTag = await TagsRepository.changeTag(tag);
        reply.send(patchedTag);
    }

    async addTag(params: CreateTagDto, reply: FastifyReply) {
        const createdTag = await TagsRepository.createTag(params);
        reply.status(201).send(createdTag);
    }

}

const TagsService = new Service();

export {
    TagsService,
}
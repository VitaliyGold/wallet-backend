import { InstancePrisma } from "../../utils/prismaClient";

import { CreateTagDto, Tag } from "./tags.types";

class Repository {
    createTag(data: CreateTagDto) {
        return InstancePrisma.tagData.create({
            data,
        });
    }

    getTags(name: string) {
        return InstancePrisma.tagData.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
        })
    }

    deleteTag(tag_id: string) {
        return InstancePrisma.tagData.delete({
            where: {
                tag_id,
            }
        })
    }

    changeTag(data: Tag) {
        return InstancePrisma.tagData.update({
            where: {
                tag_id: data.tag_id,
            },
            data,
        })
    }
}

const TagsRepository = new Repository();

export {
    TagsRepository,
}
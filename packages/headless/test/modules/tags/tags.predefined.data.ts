import { CreateTagRequestBodyDto } from 'src/modules/tags/rest/dto';
import { TagDto } from 'src/modules/tags/rest/dto/tags.dto';

export const Tag: TagDto = {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727',
    name: 'phone'
}

export const CreateTagRequest: CreateTagRequestBodyDto = {
    name: 'smartphone',
};

export const CreateTagRequestWithoutName = {}
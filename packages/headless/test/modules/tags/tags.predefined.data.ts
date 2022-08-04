import { CreateTagRequestBodyDto } from 'src/modules/tags/rest/dto';

export const CreateTagRequest: CreateTagRequestBodyDto = {
    name: 'breakfast',
};

export const CreateTagRequestWithoutName = {}
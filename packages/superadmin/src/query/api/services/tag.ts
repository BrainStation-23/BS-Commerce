import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import { CreateTagPayload, Tag, TagListResponse, UpdateTagPayload } from 'src/types/tags';

export const getTagList = async (): Promise<TagListResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.tags.list,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in getTagList:', error);
    throw error;
  }
};

export const getTagDetails = async (tagId: string): Promise<Tag> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.tags.details(tagId),
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getTagDetails:', error);
    throw error;
  }
};

export const createTag = async (tagData: CreateTagPayload): Promise<Tag> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.tags.create,
      data: tagData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in createTag:', error);
    throw error;
  }
};

export const updateTag = async (tagId: string, tagData: UpdateTagPayload): Promise<Tag> => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: endpoints.tags.update(tagId),
      data: tagData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in updateTag:', error);
    throw error;
  }
};

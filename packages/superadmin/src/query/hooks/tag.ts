import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTag, getTagDetails, getTagList, updateTag } from 'src/query/api/services/tag';
import { QUERY_KEY } from 'src/query/lib/query-keys';
import { CreateTagPayload, Tag, TagListResponse, UpdateTagPayload } from 'src/types/tags';

/**
 * Hook to fetch tag list
 *
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with tag list data
 */
export const useGetTagList = (enabled: boolean = true) => {
  const queryResult = useQuery<TagListResponse>({
    queryKey: [QUERY_KEY.TAG_LIST],
    queryFn: () => getTagList(),
    enabled,
  });

  return queryResult;
};

/**
 * Hook to fetch tag details by ID
 *
 * @param tagId - The tag ID
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with tag details
 */
export const useGetTagDetails = (tagId: string, enabled: boolean = true) => {
  const queryResult = useQuery<Tag>({
    queryKey: [QUERY_KEY.TAG_DETAILS, tagId],
    queryFn: () => getTagDetails(tagId),
    enabled: !!tagId && enabled,
  });

  return queryResult;
};

/**
 * Hook to create a new tag
 *
 * @returns Mutation result for creating a tag
 */
export const useCreateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTagPayload) => createTag(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TAG_LIST] });
    },
  });
};

/**
 * Hook to update an existing tag
 *
 * @returns Mutation result for updating a tag
 */
export const useUpdateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTagPayload }) => updateTag(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TAG_LIST] });
      if (variables.id) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.TAG_DETAILS, variables.id],
        });
      }
    },
  });
};

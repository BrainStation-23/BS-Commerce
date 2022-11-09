import { ICreateReply } from "./create.reply.interface";

export type IUpdateReplyRequest = Omit<ICreateReply, 'reviewId'>;
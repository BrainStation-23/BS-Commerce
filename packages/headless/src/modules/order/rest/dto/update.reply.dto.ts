import { OmitType } from "@nestjs/swagger";
import { CreateReplyDto } from "./create.reply.dto";

export class UpdateReplyDto extends OmitType(CreateReplyDto, ['reviewId'] as const) {}
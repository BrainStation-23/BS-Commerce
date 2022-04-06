import { Global, Module } from "@nestjs/common";
import { APIResponse } from "./apiResponse";
import { Helper } from "./helper.interface";
import { HelperService } from "./helper.service";

@Global()
@Module({
    providers: [
        { provide: Helper, useClass: HelperService },
        APIResponse
    ],
    exports: [Helper]
})

export class HelperModule { }
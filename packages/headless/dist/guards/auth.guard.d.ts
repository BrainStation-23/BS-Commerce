import { ExecutionContext } from '@nestjs/common';
declare const RolesGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class RolesGuard extends RolesGuard_base {
    private roles;
    constructor(roles: string[] | null);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, user: any, info: string): any;
}
export {};

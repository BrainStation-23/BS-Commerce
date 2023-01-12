import { AuthModule } from '../../modules/auth/auth.rest.module';
import { SearchModule } from '../../modules/global-search/search.module';
export declare const ResolveRestModule: () => (typeof AuthModule | typeof SearchModule)[];

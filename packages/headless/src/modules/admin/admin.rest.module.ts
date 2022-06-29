import { Module } from "@nestjs/common";
import { ResolveDatabaseDependency } from "src/database/database.resolver";
import { AdminRepository } from "./repositories";
import { IAdminDatabase } from "./repositories/admin.database.interface";
import { UserController } from "./rest";
import { UserService } from "./services";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    AdminRepository,
    {
      provide: IAdminDatabase,
      useClass: ResolveDatabaseDependency('ADMIN'),
    },
  ],
})
export class UserModule { }
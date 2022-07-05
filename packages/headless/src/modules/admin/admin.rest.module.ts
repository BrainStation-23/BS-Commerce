import { Module } from "@nestjs/common";
import { ResolveDatabaseDependency } from "src/database/database.resolver";
import { AdminRepository } from "./repositories";
import { IAdminDatabase } from "./repositories/admin.database.interface";
import { AdminController } from "./rest";
import { AdminService } from "./services";

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
    AdminRepository,
    {
      provide: IAdminDatabase,
      useClass: ResolveDatabaseDependency('ADMIN'),
    },
  ],
})
export class AdminModule { }
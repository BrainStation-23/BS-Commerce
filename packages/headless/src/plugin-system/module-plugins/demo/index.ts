import { Module } from "@nestjs/common";
import { DemoController } from "./controller/demo.controller";
import { DemoService } from './services/demo.service';

@Module({
  controllers: [DemoController],
  providers: [DemoService],
})
export default class DemoModule { }

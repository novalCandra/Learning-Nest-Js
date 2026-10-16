import { Module } from "@nestjs/common";
import { DatabaseService } from "./database.service.js";
// @Global() // import secara global
@Module({
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule { }
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PersonModule } from "./models/person.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"],
    }),
    PersonModule,
  ],
})
export class AppModule {}

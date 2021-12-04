import { Args, Query, Resolver } from "@nestjs/graphql";

const data = [
  {
    id: "c0e2adf9608e891bd34ab46f42db4be6",
    name: "KyuHyuk Lee",
    number: "+82 10-1234-5678",
    email: "lee@kyuhyuk.kr",
  },
  {
    id: "1297cbbbd5e4a467ca75bc1e70b57b38",
    name: "Jungwon Byeon",
    number: "+82 10-8765-4321",
  },
];

@Resolver("Person")
export class PersonResolver {
  @Query()
  async getAllPerson() {
    return data;
  }

  @Query()
  async getPerson(@Args("id") id: string) {
    const result = data.filter((item) => item.id === id);
    if (result.length === 0 || id.length === 0)
      return {
        id: "-1",
        name: "There is no information about that People ID.",
      };
    return data.filter((item) => item.id === id)[0];
  }
}

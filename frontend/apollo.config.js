module.exports = {
  client: {
    service: {
      name: "My GraphQL Server",
      url: "http://localhost:8081/graphql",
      // Optional disable SSL validation check
      skipSSLValidation: true,
    },
    includes: ["./src/**/*.tsx", "./src/**/*.ts"],
    tagName: "gql",
  },
};

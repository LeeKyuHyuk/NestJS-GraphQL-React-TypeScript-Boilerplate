import { gql, useQuery } from "@apollo/client";
import React from "react";
import { GetAllPerson } from "./types/GetAllPerson";

const GET_ALL_PERSON = gql`
  query GetAllPerson {
    getAllPerson {
      id
      name
      number
      email
    }
  }
`;

const People = () => {
  const AllPersonTable = () => {
    const { loading, error, data } = useQuery<GetAllPerson>(GET_ALL_PERSON);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.getAllPerson?.map((person) => (
            <tr key={person?.id}>
              <td>
                <a href={`/detail/${person?.id}`}>{person?.name}</a>
              </td>
              <td>{person?.number || "N/A"}</td>
              <td>{person?.email || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <h1>Nest.js + GraphQL + React + TypeScript Boilerplate</h1>
      <AllPersonTable />
    </>
  );
};

export default People;

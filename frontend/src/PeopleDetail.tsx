import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { GetPerson, GetPersonVariables } from "./types/GetPerson";

const GET_PERSON = gql`
  query GetPerson($id: String!) {
    getPerson(id: $id) {
      id
      name
      number
      email
    }
  }
`;

const PeopleDetail = () => {
  const { peopleId } = useParams();

  const { loading, error, data } = useQuery<GetPerson, GetPersonVariables>(
    GET_PERSON,
    {
      variables: {
        id: peopleId ? peopleId : "",
      },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>Name : {data?.getPerson?.name}</h1>
      <h1>Number : {data?.getPerson?.number || "N/A"}</h1>
      <h1>Email : {data?.getPerson?.email || "N/A"}</h1>
    </>
  );
};

export default PeopleDetail;

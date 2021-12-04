/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPerson
// ====================================================

export interface GetPerson_getPerson {
  __typename: "Person";
  id: string;
  name: string;
  number: string | null;
  email: string | null;
}

export interface GetPerson {
  getPerson: GetPerson_getPerson | null;
}

export interface GetPersonVariables {
  id: string;
}

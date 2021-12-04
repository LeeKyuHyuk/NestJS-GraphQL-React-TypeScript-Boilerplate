/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPerson
// ====================================================

export interface GetAllPerson_getAllPerson {
  __typename: "Person";
  id: string;
  name: string;
  number: string | null;
  email: string | null;
}

export interface GetAllPerson {
  getAllPerson: (GetAllPerson_getAllPerson | null)[] | null;
}

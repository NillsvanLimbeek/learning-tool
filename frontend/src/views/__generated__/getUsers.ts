/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_users {
  __typename: "User";
  _id: string | null;
  username: string | null;
  email: string | null;
}

export interface getUsers {
  users: (getUsers_users | null)[] | null;
}

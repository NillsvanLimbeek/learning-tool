/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddUser
// ====================================================

export interface AddUser_addUser {
  __typename: "User";
  _id: string | null;
  username: string | null;
  email: string | null;
}

export interface AddUser {
  addUser: AddUser_addUser | null;
}

export interface AddUserVariables {
  user?: UserInput | null;
}

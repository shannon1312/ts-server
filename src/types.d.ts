export type Maybe<T> = T | null;

export interface ProfileInput {
  fullName: string;

  sex: boolean;

  jobType: string;

  address: string;
}

// ====================================================
// Types
// ====================================================

export interface Mutation {
  addUser: UserProfile;
}

export interface UserProfile {
  id: number;

  fullName: string;

  sex: boolean;

  jobType: string;

  address: string;
}

export interface User {
  id: number;

  email: string;

  nickName: string;

  password: string;
}

// ====================================================
// Arguments
// ====================================================

export interface AddUserMutationArgs {
  email: string;

  nickName: string;

  password: string;

  profile: ProfileInput;
}

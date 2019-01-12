export type Maybe<T> = T | null;

export interface UserInput {
  email: string;

  nickName: string;

  password: string;
}

export interface ProfileInput {
  fullName: string;

  sex: boolean;

  jobType: JobTypeEnum;

  address: string;
}

export enum JobTypeEnum {
  Student = "STUDENT",
  Saler = "SALER",
  Progrommer = "PROGROMMER"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  hello: string;

  user: UserProfile;

  users: UserProfile[];
}

export interface UserProfile {
  id: number;

  fullName: string;

  sex: boolean;

  jobType: string;

  address: string;

  user: User;
}

export interface User {
  id: number;

  email: string;

  nickName: string;

  password: string;
}

export interface Mutation {
  createUser: UserProfile;
}

// ====================================================
// Arguments
// ====================================================

export interface HelloQueryArgs {
  name: string;
}
export interface UserQueryArgs {
  id: number;
}
export interface CreateUserMutationArgs {
  user: UserInput;

  profile: ProfileInput;
}

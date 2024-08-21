import { UserResponse } from "./user.response";

export class UserPaginationResponse {
  users: UserResponse[] = [];
  total: number;
  skip: number;
  limit: number;
}

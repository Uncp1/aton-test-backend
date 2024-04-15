import { User } from 'src/users/user.schema';

export interface UserRequest extends Request {
  user: User;
}

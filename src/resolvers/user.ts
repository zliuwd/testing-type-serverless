import { TypeMap } from '../typeMap';
import { UserPromise, UserCreateInput } from '../generated/prisma-client';

interface UserDeleteById {
  id: string;
}

export default {
  Query: {
    users: (parent: TypeMap['QueryParent'], args: null, ctx: TypeMap['Context']): UserPromise => ctx.prisma.users(),
  },
  Mutation: {
    signUp: (parent: TypeMap['QueryParent'], args: UserCreateInput, ctx: TypeMap['Context']): UserPromise => {
      const newUser = ctx.prisma.createUser(args);

      return newUser;
    },
    deleteUser: (parent: TypeMap['QueryParent'], args: UserDeleteById, ctx: TypeMap['Context']): UserPromise =>
      ctx.prisma.deleteUser({ id: args.id }),
  },
};

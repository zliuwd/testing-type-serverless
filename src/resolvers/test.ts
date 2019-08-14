export default {
  Query: {
    hello: (): string => {
      return 'this is the graphql return msg!';
    },
    users: (parent, args, ctx, info) => ctx.prisma.users()
  },
  Mutation: {
    signUp: (parent, { name, email }, ctx, info) => {
      const newUser = ctx.prisma.createUser({
        name,
        email
      });

      return newUser;
    },
    deleteUser: (parent, args, ctx, info) =>
      ctx.prisma.deleteUser({ id: args.id })
  }
};

export default {
  Query: {
    hello: (): string => {
      return 'this is the graphql return msg!';
    },
    users: (parent, args, ctx, info) => ctx.prisma.users()
  }
};

export default {
    Query: {
        users: (parent, args, ctx, info) => ctx.prisma.users()
    }
  };
  
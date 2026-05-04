import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("brands")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    type: v.union(v.literal("panels"), v.literal("inverters"), v.literal("both")),
    domain: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    order: v.number(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("brands", args);
  },
});

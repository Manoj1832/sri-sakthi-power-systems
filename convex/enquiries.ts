import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("enquiries").withIndex("by_status", (q) => q.eq("status", "new")).collect();
  },
});

export const submit = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    message: v.string(),
    product: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("enquiries", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
  },
});

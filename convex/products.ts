import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("isActive"), true))
      .order("desc")
      .collect();
  },
});

export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("products")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    category: v.union(
      v.literal("panels"),
      v.literal("inverters"),
      v.literal("systems"),
      v.literal("accessories"),
      v.literal("lighting"),
      v.literal("pumping")
    ),
    description: v.string(),
    shortDesc: v.string(),
    brands: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", args);
  },
});

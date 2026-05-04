import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("siteConfig").first();
  },
});

export const update = mutation({
  args: {
    id: v.id("siteConfig"),
    updates: v.any(), // Simplified for now
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, args.updates);
  },
});

export const initialize = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("siteConfig").first();
    if (existing) return existing._id;

    return await ctx.db.insert("siteConfig", {
      logoAlt: "Sri Sakthi Power Systems",
      heroHeading: "SOLAR",
      heroSubheading: "Powering Erode one rooftop at a time. OnGrid, Hybrid & Off-Grid solar solutions.",
      heroCta1Text: "Get Free Quote",
      heroCta1Link: "/contact",
      heroCta2Text: "Explore Products",
      heroCta2Link: "/products",
      aboutHeading: "Powering Erode Through Contemporary Solar Solutions",
      aboutBody: "Sri Sakthi Power Systems is Erode's trusted solar energy partner...",
      stat1Label: "Projects Done", stat1Value: "300+",
      stat2Label: "Panel Brands", stat2Value: "9+",
      stat3Label: "Inverter Brands", stat3Value: "12+",
      stat4Label: "Happy Customers", stat4Value: "400+",
      productsHeading: "Complete Solar Product Range",
      productsSubheading: "From solar panels and inverters to complete power plant installations...",
      howStep1: "Site Survey",
      howStep2: "System Design",
      howStep3: "Installation",
      howStep4: "Handover",
      ctaHeading: "Get Solar Energy for Your Home Today",
      ctaBody: "Save up to 90% on electricity bills. Contact us for a free site survey.",
      ctaBtnText: "WhatsApp Us",
      ctaBtnLink: "https://wa.me/917358942468",
      phone1: "+91 73589 42468",
      phone2: "+91 99943 47579",
      email: "srisakthipowersystemserd@gmail.com",
      address: "18/16, Kumaran Towers Road, Thindal, Erode – 638012, Tamil Nadu",
      gstin: "33KGKPS8891F2ZI",
      metaTitle: "Sri Sakthi Power Systems | Solar Energy Solutions, Erode",
      metaDescription: "Leading Solar Energy Solutions in Erode, Tamil Nadu.",
      primaryColor: "#0056b3",
      darkBg: "#0b162c",
    });
  },
});

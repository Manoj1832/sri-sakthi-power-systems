import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ─── 1. SITE CONFIG (admin editable — single row) ───────────────────────
  siteConfig: defineTable({
    logoUrl: v.optional(v.string()),
    logoAlt: v.string(),
    favicon: v.optional(v.string()),

    // Hero Section
    heroHeading: v.string(),
    heroSubheading: v.string(),
    heroBadgeText: v.optional(v.string()),
    heroBgImageUrl: v.optional(v.string()),
    heroCta1Text: v.string(),
    heroCta1Link: v.string(),
    heroCta2Text: v.string(),
    heroCta2Link: v.string(),

    // About Section
    aboutHeading: v.string(),
    aboutBody: v.string(),
    aboutImageUrl: v.optional(v.string()),

    // Stats
    stat1Label: v.string(),   stat1Value: v.string(),
    stat2Label: v.string(),   stat2Value: v.string(),
    stat3Label: v.string(),   stat3Value: v.string(),
    stat4Label: v.string(),   stat4Value: v.string(),

    // Products Section
    productsHeading: v.string(),
    productsSubheading: v.string(),

    // How It Works
    howStep1: v.string(), howStep1Img: v.optional(v.string()),
    howStep2: v.string(), howStep2Img: v.optional(v.string()),
    howStep3: v.string(), howStep3Img: v.optional(v.string()),
    howStep4: v.string(), howStep4Img: v.optional(v.string()),

    // CTA Banner
    ctaHeading: v.string(),
    ctaBody: v.string(),
    ctaBtnText: v.string(),
    ctaBtnLink: v.string(),
    ctaBgImageUrl: v.optional(v.string()),

    // Contact
    phone1: v.string(),
    phone2: v.optional(v.string()),
    email: v.string(),
    address: v.string(),
    gstin: v.string(),

    // Social
    whatsapp: v.optional(v.string()),
    facebook: v.optional(v.string()),
    instagram: v.optional(v.string()),

    // SEO
    metaTitle: v.string(),
    metaDescription: v.string(),

    // Theme
    primaryColor: v.string(),
    darkBg: v.string(),
  }),

  // ─── 2. PRODUCTS ─────────────────────────────────────────────────────────
  products: defineTable({
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
  }).index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  // ─── 3. BRANDS ───────────────────────────────────────────────────────────
  brands: defineTable({
    name: v.string(),
    type: v.union(v.literal("panels"), v.literal("inverters"), v.literal("both")),
    domain: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    order: v.number(),
    isActive: v.boolean(),
  }),

  // ─── 4. PROJECTS (The Portfolio) ─────────────────────────────────────────
  projects: defineTable({
    title: v.string(),
    location: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    featured: v.boolean(),
    order: v.number(),
  }),

  // ─── 5. ENQUIRIES ────────────────────────────────────────────────────────
  enquiries: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    message: v.string(),
    product: v.optional(v.string()),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("closed")),
    createdAt: v.number(),
  }).index("by_status", ["status"]),

  // ─── 6. NEWS / BLOG ──────────────────────────────────────────────────────
  news: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    publishedAt: v.string(),
    isPublished: v.boolean(),
  }).index("by_slug", ["slug"]),
});

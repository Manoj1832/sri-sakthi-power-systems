import { mutation } from "./_generated/server";

export const all = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Clear existing (optional, but good for seeding)
    // For now we just check if data exists
    const config = await ctx.db.query("siteConfig").first();
    if (config) return "Already seeded";

    // 2. Seed Site Config
    await ctx.db.insert("siteConfig", {
      logoAlt: "Sri Sakthi Power Systems",
      heroHeading: "SOLAR",
      heroSubheading: "Powering Erode one rooftop at a time. OnGrid, Hybrid & Off-Grid solar solutions.",
      heroCta1Text: "Get Free Quote",
      heroCta1Link: "/contact",
      heroCta2Text: "Explore Products",
      heroCta2Link: "/products",
      aboutHeading: "Powering Erode Through Contemporary Solar Solutions",
      aboutBody: "Sri Sakthi Power Systems is Erode's trusted solar energy partner based in Thindal, Erode. We are a GST-registered company dealing in India's top solar brands.",
      stat1Label: "Projects Done", stat1Value: "300+",
      stat2Label: "Panel Brands", stat2Value: "9+",
      stat3Label: "Inverter Brands", stat3Value: "12+",
      stat4Label: "Happy Customers", stat4Value: "400+",
      productsHeading: "Complete Solar Product Range",
      productsSubheading: "From solar panels and inverters to complete installations.",
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

    // 3. Seed Products
    const products = [
      { name: "Solar Panels", category: "panels", shortDesc: "Mono & Poly crystalline panels", description: "High efficiency panels from top brands like Kirloskar, Adani, and Waaree.", brands: ["Kirloskar", "Adani", "Waaree"], featured: true, order: 1, isActive: true },
      { name: "Solar Inverters", category: "inverters", shortDesc: "OnGrid, Hybrid & Off-Grid", description: "Reliable power conversion from Growatt, Sungrow, and Havells.", brands: ["Growatt", "Sungrow", "Havells"], featured: true, order: 2, isActive: true },
      { name: "Solar Pumping Systems", category: "pumping", shortDesc: "AC & DC Motor Pumps", description: "Efficient water pumping solutions for agriculture and domestic use.", brands: ["Kirloskar", "UTL"], featured: true, order: 3, isActive: true },
      { name: "Solar Water Heater", category: "systems", shortDesc: "Domestic & Commercial", description: "Hot water solutions using solar thermal energy.", brands: ["Generic"], featured: false, order: 4, isActive: true },
      { name: "Solar Street Light", category: "lighting", shortDesc: "Integrated & Split Systems", description: "Sustainable outdoor lighting for roads and communities.", brands: ["Generic"], featured: false, order: 5, isActive: true },
    ];
    for (const p of products) {
      await ctx.db.insert("products", p as any);
    }

    // 4. Seed Brands
    const brands = [
      { name: "Kirloskar Solar", domain: "kirloskar.com", type: "both", order: 1, isActive: true },
      { name: "Adani Solar", domain: "adanisolar.com", type: "panels", order: 2, isActive: true },
      { name: "Waaree", domain: "waaree.com", type: "panels", order: 3, isActive: true },
      { name: "Growatt", domain: "ginverter.com", type: "inverters", order: 4, isActive: true },
      { name: "Sungrow", domain: "sungrowpower.com", type: "inverters", order: 5, isActive: true },
    ];
    for (const b of brands) {
      await ctx.db.insert("brands", b as any);
    }

    // 5. Seed Projects
    const projectList = [
      { title: "5kW Residential On-Grid", location: "Thindal, Erode", description: "Installation at a private residence.", imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", featured: true, order: 1 },
      { title: "10kW Commercial Hybrid", location: "Perundurai, Erode", description: "Powering a local business.", imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5ab41f176c?auto=format&fit=crop&q=80&w=800", featured: true, order: 2 },
    ];
    for (const proj of projectList) {
      await ctx.db.insert("projects", proj);
    }

    return "Seeding completed successfully";
  },
});

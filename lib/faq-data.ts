export type FAQItem = { question: string; answer: string };

/** Twenty FAQs for FAQPage schema and /faq — no pricing numbers. */
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does quoting work for a homeowner project?",
    answer:
      "We start with a conversation about your space, timeline, and goals. From there we outline next steps, materials that fit your project, and what information we need to move forward—without publishing pricing online.",
  },
  {
    question: "Does Craftmark take small projects?",
    answer:
      "Yes. Craftmark works on projects of any size—from a single kitchen or bath to large commercial scopes. The same professional standards apply across the board.",
  },
  {
    question: "What should I expect for timelines?",
    answer:
      "Timelines depend on material availability, fabrication schedule, and install coordination. We focus on honest timelines up front and proactive communication as your project moves through each stage.",
  },
  {
    question: "What materials do you fabricate and install?",
    answer:
      "We work with quartz, natural stone, solid surface, and custom bath surfaces—built to order and installed by professional teams.",
  },
  {
    question: "How are seams handled?",
    answer:
      "Seam placement and appearance are planned with your layout, slab movement, and practical use in mind. Your project team can walk through expectations during design and templating.",
  },
  {
    question: "Do you work with builders and developers?",
    answer:
      "Yes. Builders value repeatable quality, scheduling reliability, and the ability to scale from one home to full developments. Craftmark is built for that kind of volume and consistency.",
  },
  {
    question: "Do you support commercial contractors?",
    answer:
      "Yes. Commercial work benefits from documentation readiness, schedule discipline, and risk reduction. We are structured to support professional commercial workflows.",
  },
  {
    question: "What is your service area?",
    answer:
      "Service area depends on project type and logistics. Share your ZIP or job location when you contact us and we will confirm coverage and next steps.",
  },
  {
    question: "Can I get cost expectations without a quote?",
    answer:
      "Countertop investments vary widely by material, edge detail, scope, and site conditions. We do not publish pricing online; we will guide you through what drives cost so you can plan with clarity.",
  },
  {
    question: "Do you install sinks and fixtures?",
    answer:
      "Install scope is coordinated around your project plan. Tell us what you are planning for sinks, faucets, and appliances so we can align templating and installation details.",
  },
  {
    question: "What does “projects of any size” mean in practice?",
    answer:
      "It means we support single-room remodels, custom homes, multi-unit production work, and commercial scopes—without treating smaller jobs as an afterthought.",
  },
  {
    question: "How do homeowners differ from pro-led projects?",
    answer:
      "The product and installation standards are consistent. Homeowner projects emphasize education, fewer surprises, and clear guidance through selections and scheduling.",
  },
  {
    question: "What is templating and why does it matter?",
    answer:
      "Templating captures the exact dimensions and conditions of your space after cabinets and supports are correctly set. It is what makes custom fabrication fit precisely on install day.",
  },
  {
    question: "Can you work with my designer or contractor?",
    answer:
      "Yes. We regularly coordinate with designers, builders, and trade partners to align schedules, expectations, and installation readiness.",
  },
  {
    question: "What happens after I book a design consultation?",
    answer:
      "We confirm details, discuss options that fit your goals, and outline the path to templating, fabrication, and installation—plus what we need from you at each step.",
  },
  {
    question: "Do you offer remnants?",
    answer:
      "Remnant availability changes quickly. Use our Remnants section to explore what is listed and submit a request so our team can confirm current availability for your needs.",
  },
  {
    question: "What information helps for a quote request?",
    answer:
      "Photos, approximate scope, desired material family, layout notes, and timing all help. You do not need perfect drawings to start—share what you have and we will guide the rest.",
  },
  {
    question: "Is Craftmark a retail showroom or a manufacturer?",
    answer:
      "Craftmark is a custom manufacturer and fabricator with a process-driven approach and professional installation teams—built for pro expectations and homeowner-ready communication.",
  },
  {
    question: "What does professional installation include?",
    answer:
      "Installation is performed by trained teams focused on fit, finish, and safe jobsite practices. Specific scope is confirmed for your project so expectations are clear before install day.",
  },
  {
    question: "How do I start a commercial conversation?",
    answer:
      "Use Contact and select Commercial Contractor, or choose the commercial path from our site. Include schedule drivers, documentation needs, and project location so we can respond efficiently.",
  },
];

export const HOME_FAQ_PREVIEW = FAQ_ITEMS.slice(0, 6);

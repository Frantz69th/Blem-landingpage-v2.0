"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. What makes BlemCRM implementation swift and cost-effective?",
    desc: "The BlemCRM Advantage includes a swift implementation process that minimizes disruptions to your operations. Our competitive pricing ensures affordability without compromising on features.",
  },
  {
    title: "2. How user-friendly is BlemCRM’s interface?",
    desc: "BlemCRM boasts an intuitive, clean, and clutter-free design, ensuring your team can navigate the platform effortlessly. Minimal training is required, allowing you to focus more on your business.",
  },
  {
    title: "3. How does BlemCRM ensure data security and privacy?",
    desc: "BlemCRM employs robust security protocols to protect sensitive information. We adhere to industry standards, ensuring your customers' data remains confidential and secure.",
  },
  {
    title: "4. Can BlemCRM be customized to fit my business needs?",
    desc: "Yes, BlemCRM can be tailored to your unique business requirements. You can customize fields, workflows, and reports effortlessly without dealing with overwhelming functionalities.",
  },
  {
    title: "5. Does BlemCRM integrate with other tools and can it scale with my business?",
    desc: "BlemCRM offers plug-and-play integration, allowing seamless connection with your existing tools without compatibility issues. As your business grows, BlemCRM scales with you, eliminating the need to switch systems.",
  },
  {
    title: "6. What kind of customer support does BlemCRM offer?",
    desc: "BlemCRM provides stellar customer support with responsive assistance. Our support team is available to address your queries promptly, ensuring guidance every step of the way.",
  },
  {
    title: "7. Are there any hidden costs associated with BlemCRM?",
    desc: "No, BlemCRM’s pricing is transparent with no hidden fees or surprises. You get straightforward value for your investment.",
  },
  {
    title: "8. How can I get started with BlemCRM?",
    desc: "Getting started with BlemCRM is simple. Visit our website, create your BlemCRM account, explore the features, and experience the difference in seamless CRM management.",
  },
  {
    title: "9. Why should I choose BlemCRM over other CRM systems?",
    desc: "BlemCRM isn’t just software; it's your strategic partner in growth. With swift implementation, affordability, user-friendly design, robust security, customization options, seamless integration, scalability, stellar customer support, and transparent pricing, BlemCRM stands out as the ultimate CRM solution.",
  },
  {
    title: "10. What should I expect after signing up for BlemCRM?",
    desc: "After signing up, you'll unlock the power of effortless customer relationship management. Discover how BlemCRM can transform your customer interactions and say goodbye to drawbacks, welcoming seamless CRM management.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-blue-gray-800">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

"use client";

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _FiliaisPosts,
  _pricingFiliais,
} from "src/_mock";

import { FiliaisTeam } from "../marketing-team";
import { FiliaisPricing } from "./marketing-pricing";
import { FiliaisNewsletter } from "../marketing-newsletter";
import { FiliaisOurClients } from "../marketing-our-clients";
import { FiliaisTestimonial } from "../marketing-testimonial";
import { FiliaisLatestPosts } from "../posts/marketing-latest-posts";
import { FiliaisLandingHero } from "../landing/marketing-landing-hero";
import { FiliaisLandingFaqs } from "../landing/marketing-landing-faqs";
import { FiliaisLandingAbout } from "../landing/marketing-landing-about";
import { FiliaisLandingProcess } from "../landing/marketing-landing-process";
import { FiliaisLandingFreeSEO } from "../landing/marketing-landing-free-seo";
import { FiliaisLandingServices } from "../landing/marketing-landing-services";
import { FiliaisLandingCaseStudies } from "../landing/marketing-landing-case-studies";

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);
const latestPosts = _FiliaisPosts.slice(0, 4);

export function FiliaisLandingView() {
  return (
    <>
      <FiliaisLandingHero />

      <FiliaisOurClients brands={_brands} />

      <FiliaisLandingAbout />

      <FiliaisLandingServices />

      <FiliaisLandingProcess />

      <FiliaisLandingCaseStudies caseStudies={caseStudies} />

      <FiliaisTeam members={_members} />

      <FiliaisPricing plans={_pricingFiliais} />

      <FiliaisLandingFaqs />

      <FiliaisTestimonial testimonials={_testimonials} />

      <FiliaisLatestPosts posts={latestPosts} />

      <FiliaisLandingFreeSEO />

      <FiliaisNewsletter />
    </>
  );
}

"use client";

import { _brands } from "@/_mock";

import { ElearningOurClients } from "@/sections/_elearning/elearning-our-clients";
import { FiliaisServicesHowItWork } from "@/sections/_filiais/services/marketing-services-how-it-work";
import { HomeFlexibleComponents } from "../home-flexible-components";
import { EcommerceLandingHero } from "@/sections/_ecommerce/landing/ecommerce-landing-hero";
import { FiliaisContact } from "@/sections/_filiais/contact/marketing-contact";

//------------------------------------------------------------------------------------------

export function HomeView() {
  return (
    <>
      <FiliaisServicesHowItWork />

      <ElearningOurClients brands={_brands} />

      <HomeFlexibleComponents />

      <EcommerceLandingHero />

      <FiliaisContact />
    </>
  );
}

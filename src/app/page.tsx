"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Award, Clock, MapPin, Shield, Zap, DollarSign, Wrench, Image, Phone, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="GN Roof Restoration"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Call Now: 0458 820 620", href: "tel:0458820620" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="GN Roof Restoration Sydney"
          description="Sydney's Trusted Roof Restoration Experts. 5-Star Rated Roofing Services in Blacktown & Across Sydney. Fast, Professional, Affordable."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Call Now – 0458 820 620", href: "tel:0458820620" },
            { text: "Get Free Quote", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/long-shot-man-working-roof_23-2148748777.jpg"
          imageAlt="Professional roof restoration work in progress"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          ariaLabel="Hero section - GN Roof Restoration Sydney"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Our Complete Roofing Services"
          description="From restoration to repairs, we offer comprehensive roofing solutions tailored to your needs. Professional workmanship, quality materials, and competitive pricing."
          features={[
            {
              id: 1,
              title: "Roof Restoration",              description: "Full roof restoration with cleaning, sealing, and painting. Extends roof life and enhances curb appeal.",              buttons: [{ text: "Learn More", href: "#contact" }],
              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/construction-exterior-flowers-mediterranean-white_1253-367.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/metallic-iron-textured-abstract-backdrop_23-2148139853.jpg?_wi=1" }
            },
            {
              id: 2,
              title: "Roof Painting",              description: "Professional roof painting to refresh your home's appearance. High-quality paints for durability and color retention.",              buttons: [{ text: "Learn More", href: "#contact" }],
              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/construction-exterior-flowers-mediterranean-white_1253-367.jpg?_wi=2" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/old-rusted-metal-gate-texture-with-peeling-turquoise-paint-spikes_626616-504.jpg?_wi=1" }
            },
            {
              id: 3,
              title: "Pressure Cleaning",              description: "Deep cleaning removes dirt, moss, and algae. Restores your roof to like-new condition safely and effectively.",              buttons: [{ text: "Learn More", href: "#contact" }],
              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/legs-skateboarder-preparing-ride_23-2147678296.jpg" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/windmill-witch-rooftop-with-blue-sky_1428-577.jpg?_wi=1" }
            },
            {
              id: 4,
              title: "Gutter Cleaning & Guards",              description: "Professional gutter cleaning and guard installation. Protects your roof and prevents water damage.",              buttons: [{ text: "Learn More", href: "#contact" }],
              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-helmets_23-2149343655.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-helmets_23-2149343655.jpg?_wi=2" }
            },
            {
              id: 5,
              title: "Roof Repairs",              description: "Fast, reliable leak and damage repairs. Same-day quotes available for emergency roof issues.",              buttons: [{ text: "Learn More", href: "#contact" }],
              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-happy-male-electrician-showing-thumb-up-workplace_23-2148087637.jpg" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/metallic-iron-textured-abstract-backdrop_23-2148139853.jpg?_wi=2" }
            },
            {
              id: 6,
              title: "Waterproofing",              description: "Protective sealants and coatings for long-lasting protection. Prevents leaks and extends roof lifespan.",              buttons: [{ text: "Learn More", href: "#contact" }],
              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-roof_23-2149343653.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-roof_23-2149343653.jpg?_wi=2" }
            }
          ]}
          showStepNumbers={true}
          tag="Professional Services"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          buttons={[{ text: "Request Free Quote", href: "#contact" }]}
          buttonAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Services section - Roofing solutions"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardOne
          title="Before & After Transformations"
          description="Real projects, real results. See how we transform roofs in Blacktown and across Sydney."
          products={[
            {
              id: "ba1",              name: "Tile Roof Restoration – Blacktown",              price: "Complete Transformation",              imageSrc: "http://img.b2bpic.net/free-photo/metallic-iron-textured-abstract-backdrop_23-2148139853.jpg?_wi=3",              imageAlt: "Tile roof restoration before and after"
            },
            {
              id: "ba2",              name: "Full Roof Paint & Clean – Western Sydney",              price: "Professional Workmanship",              imageSrc: "http://img.b2bpic.net/free-photo/old-rusted-metal-gate-texture-with-peeling-turquoise-paint-spikes_626616-504.jpg?_wi=2",              imageAlt: "Roof painting and cleaning transformation"
            },
            {
              id: "ba3",              name: "Deep Pressure Clean – Sydney Area",              price: "Quality Results",              imageSrc: "http://img.b2bpic.net/free-photo/windmill-witch-rooftop-with-blue-sky_1428-577.jpg?_wi=2",              imageAlt: "Roof pressure cleaning before after"
            }
          ]}
          carouselMode="buttons"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          tag="Gallery"
          tagIcon={Image}
          tagAnimation="slide-up"
          buttons={[{ text: "See More Projects", href: "#contact" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Before and after gallery"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="5-Star rated by over 150 happy customers in Sydney. Real testimonials from real homeowners."
          testimonials={[
            {
              id: "1",              name: "Kamal Dhillon",              role: "Homeowner",              testimonial: "Great experience—fair pricing, skilled team, and a flawless roof! Highly recommend GN Roof Restoration.",              imageSrc: "http://img.b2bpic.net/free-photo/worker-uniform-against-backdrop-agri-buildings_146671-19122.jpg",              imageAlt: "Kamal Dhillon testimonial"
            },
            {
              id: "2",              name: "Rajinder Kumar",              role: "Homeowner",              testimonial: "Awesome job… good price and quality workmanship. They showed up on time and did exactly what they promised.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-celebrating-giving-highfive-each-other-while-being-meeting-with-real-estate-agent_637285-6877.jpg",              imageAlt: "Rajinder Kumar testimonial"
            },
            {
              id: "3",              name: "Taz Ahmed",              role: "Property Owner",              testimonial: "Roof looks immaculate… fast and professional. Best decision we made for our home's maintenance.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-posing-together-their-new-home-while-holding-paintbrush_23-2149086844.jpg",              imageAlt: "Taz Ahmed testimonial"
            },
            {
              id: "4",              name: "Lisa Martinez",              role: "Homeowner",              testimonial: "Professional team, excellent communication, and outstanding results. Very happy with the entire process and outcome.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-manager-shaking-hands-with-african-american-factory-worker-industrial-building_637285-4774.jpg",              imageAlt: "Lisa Martinez testimonial"
            },
            {
              id: "5",              name: "David Chen",              role: "Property Owner",              testimonial: "Fair pricing, no hidden costs, and they completed the work ahead of schedule. Highly professional team.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-with-helmet-sitting-roof_23-2149343713.jpg",              imageAlt: "David Chen testimonial"
            },
            {
              id: "6",              name: "Sarah Johnson",              role: "Homeowner",              testimonial: "Exceptional workmanship and attention to detail. Our roof looks brand new. Worth every penny.",              imageSrc: "http://img.b2bpic.net/free-photo/worker-building-roof-house_23-2148748850.jpg",              imageAlt: "Sarah Johnson testimonial"
            }
          ]}
          carouselMode="buttons"
          animationType="slide-up"
          tag="Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[{ text: "Read More Reviews", href: "#contact" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials and reviews"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <AboutMetric
          title="Why Choose GN Roof Restoration"
          metrics={[
            { icon: Award, label: "5.0 Rating", value: "150+ Reviews" },
            { icon: Clock, label: "24/7 Service", value: "Fast Response" },
            { icon: MapPin, label: "Local Blacktown", value: "Sydney Based" },
            { icon: Shield, label: "Fully Insured", value: "Quality Guarantee" },
            { icon: Zap, label: "Same-Day Quotes", value: "Quick Process" },
            { icon: DollarSign, label: "Affordable Pricing", value: "No Hidden Costs" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Trust and quality metrics"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Find answers to frequently asked questions about our roofing services, pricing, and process."
          faqs={[
            {
              id: "1",              title: "How much does roof restoration cost?",              content: "Roof restoration costs vary based on roof size, condition, and materials. We provide free, no-obligation quotes. Call us for a same-day assessment: 0458 820 620."
            },
            {
              id: "2",              title: "How long does a roof restoration take?",              content: "Most roof restorations take 2-5 days depending on size and weather. We'll provide a timeline during your free quote consultation."
            },
            {
              id: "3",              title: "Do you offer warranties?",              content: "Yes! We guarantee quality workmanship. Our team uses premium materials backed by manufacturer warranties. Ask us about our service guarantee."
            },
            {
              id: "4",              title: "Are you fully insured?",              content: "Absolutely. GN Roof Restoration is fully insured and licensed. Your property and our team are fully protected."
            },
            {
              id: "5",              title: "Do you offer emergency repairs?",              content: "Yes! We're available 24/7 for emergency roof repairs. Call 0458 820 620 for immediate assistance with leaks or storm damage."
            },
            {
              id: "6",              title: "What areas do you service?",              content: "We proudly service Blacktown and all surrounding Sydney suburbs including Western Sydney. Call us to confirm your location."
            }
          ]}
          buttons={[{ text: "Request Free Quote", href: "#contact" }]}
          buttonAnimation="slide-up"
          faqsAnimation="slide-up"
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
          ariaLabel="Frequently asked questions"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Need Your Roof Fixed Fast?"
          description="Request a free quote today. Same-day quotes available. Fast, professional, affordable roofing services."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Request Free Quote"
          termsText="By requesting a quote, you agree to our Terms and Conditions and Privacy Policy."
          ariaLabel="Contact section - Request free quote"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Roof Restoration", href: "#services" },
                { label: "Roof Painting", href: "#services" },
                { label: "Pressure Cleaning", href: "#services" },
                { label: "Gutter Cleaning", href: "#services" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: 0458 820 620", href: "tel:0458820620" },
                { label: "Address: 12 Bedford Rd, Blacktown NSW 2148", href: "#" },
                { label: "Email: info@gnroof.com.au", href: "mailto:info@gnroof.com.au" },
                { label: "Hours: 24/7 Available", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "YouTube", href: "https://youtube.com" }
              ]
            }
          ]}
          copyrightText="© 2024 GN Roof Restoration Sydney Pty Ltd. All rights reserved."
          ariaLabel="Footer section"
        />
      </div>
    </ThemeProvider>
  );
}
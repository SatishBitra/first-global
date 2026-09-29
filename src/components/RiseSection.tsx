import React, { useState } from 'react';
import { ArrowUpRight, Home, Wrench, Building2, Network, ArrowRight } from 'lucide-react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

interface RiseSectionProps {
  onOpenEnquiry?: () => void;
}

export const RiseSection: React.FC<RiseSectionProps> = ({ onOpenEnquiry }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const risePillars = [
    {
      id: 1,
      title: 'Households',
      tagline: 'Care & Essential Services',
      description:
        'Bringing reliable home maintenance, solar micro-grid support, clean water, and farm equipment care directly to village households.',
      icon: Home,
      image: '/hh.jpg',
      borderColor: 'hover:border-[#e97824]',
      accentBg: 'bg-[#e97824]',
    },
    {
      id: 2,
      title: 'Local Service Providers',
      tagline: 'Livelihoods & Micro-Enterprise',
      description:
        'Empowering local Village Level Entrepreneurs (VLEs) and skilled rural youth with digital job dispatch, training, and steady income.',
      icon: Wrench,
      image: '/lsp.jpg',
      borderColor: 'hover:border-[#1557c0]',
      accentBg: 'bg-[#1557c0]',
    },
    {
      id: 3,
      title: 'Institutions',
      tagline: 'Panchayats & Cooperatives',
      description:
        'Partnering with Gram Panchayats, self-help groups (SHGs), rural banks, and cooperative societies for transparent governance.',
      icon: Building2,
      image: '/ri.jpg',
      borderColor: 'hover:border-[#078f83]',
      accentBg: 'bg-[#078f83]',
    },
    {
      id: 4,
      title: 'Enabling Partners',
      tagline: 'Digital Public Infrastructure',
      description:
        'Integrating with India Stack, ONDC protocols, technology platforms, and social impact investors to scale across 600,000+ villages.',
      icon: Network,
      image: '/patnerships.jpg',
      borderColor: 'hover:border-[#4e9f45]',
      accentBg: 'bg-[#4e9f45]',
    },
  ];

  return (
    <section id="rise" className="py-20 sm:py-28 lg:py-32 bg-[#ffffff] relative overflow-hidden" aria-label="RISE Initiative">
      {/* Background jali pattern */}
      <div className="absolute inset-0 bg-weave-pattern opacity-50 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header (PRD Section 19 & 20) with Text Reveal */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102a56]/5 text-[#102a56] text-[12px] font-heading font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e97824]" />
              <span>FirstGlobal Innovation Initiative</span>
            </div>
          </ScrollReveal>

          <TextReveal
            as="h2"
            text="RISE®"
            className="text-[34px] sm:text-[46px] md:text-[54px] font-heading font-normal text-[#102a56] tracking-tight leading-[1.1] mb-5"
          />

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-[19px] sm:text-[22px] font-heading font-medium text-[#e97824] leading-snug mb-4">
              Organised, reliable rural service delivery
            </p>

            <p className="text-[15.5px] sm:text-[17px] text-[#6f6a61] leading-relaxed font-sans text-balance">
              RISE® is First-Global’s innovation-led initiative that supports the development of organised, reliable rural service delivery. It brings together households, local service providers, institutions, and enabling partners through practical, enterprise-focused models.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Modular Grid (PRD Section 20, 21, 22) with Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {risePillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <ScrollReveal key={pillar.id} direction="up" delay={0.1 * (idx + 1)}>
                <div
                  onMouseEnter={() => setActiveCard(pillar.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`h-full relative rounded-[24px] bg-[#fcf9f2] border border-[#e6eaee] overflow-hidden flex flex-col justify-between p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${pillar.borderColor} group`}
                >
                  {/* Top Image Thumbnail */}
                  <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] mb-5 bg-[#102a56]/10 shadow-xs">
                    <img
                      src={pillar.image}
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80';
                      }}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Icon badge without span text beside it per user request */}
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 rounded-full ${pillar.accentBg} text-white flex items-center justify-center shadow-xs`}>
                          <Icon size={15} />
                        </div>
                      </div>

                      <h3 className="text-[18px] sm:text-[20px] font-heading font-semibold text-[#102a56] mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-[13px] sm:text-[14px] text-[#6f6a61] leading-relaxed mb-6 font-sans">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom Line Connection to RISE */}
                    <div className="pt-4 border-t border-[#e6eaee] flex items-center justify-between text-[12px] font-heading font-medium text-[#102a56]">
                      <span className="group-hover:text-[#e97824] transition-colors">{pillar.tagline}</span>
                      <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Central Ecosystem Synergy Bar */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 p-6 rounded-[20px] bg-[#fcf9f2] border border-[#e6eaee] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[14px] sm:text-[15px] font-heading font-medium text-[#102a56]">
                Four pillars connected into one unified sovereign rural platform.
              </p>
            </div>
            {onOpenEnquiry && (
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#102a56] hover:bg-[#17202b] text-white text-[13.5px] font-heading font-medium transition-all shadow-xs"
              >
                <span>Explore RISE® Collaboration</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

import Image from "next/image";
import { Reveal } from "./reveal";

const TEAM = [
  {
    role: "Producer",
    name: "Danica Sta. Lucia",
    image: "/team/danica-sta-lucia.jpg",
    imageAlt: "Portrait of Danica Sta. Lucia",
    bio: [
      "Danica Sta. Lucia is a producer that specializes in video and content production.",
      "With 10 years of experience in the media industry, she has developed strong expertise in video production, project management and content development, as well as a passion for telling compelling and impactful stories across different platforms and genres.",
      "She has produced projects for local and international clients such as Microsoft, Google Cloud, Google Workspace, World Bank Philippines, Globe Telecom, Engie, NEC, 5:00 Films and Thales Group, delivering high-quality and engaging content that meets their objectives and exceeds their expectations. She also directed and produced her first full-length film, Malamaya (The Color of Ash), a finalist in the 15th Cinemalaya Film Festival in 2019.",
    ],
    sample: "Danica sample works — to follow",
  },
  {
    role: "Filmmaker and Director",
    name: "Keith Deligero",
    image: "/team/keith-deligero.jpg",
    imageAlt: "Portrait of Keith Deligero",
    bio: [
      "Keith Deligero directed the features Iskalawags (2013) and Lily (2016). His short film Babylon (2017) won Best Film at the QCinema International Film Festival and competed at the 2018 Berlinale.",
      "His most recent feature, A Short History of a Few Bad Things (2018), won a special jury award at the Cinema One Originals Film Festival. His films consistently appear in annual lists of Best Films of the Philippines. His 2021 short film, Days Of The New, premiered at the Bucheon International Fantastic Film Festival in South Korea.",
      "Keith founded and programs for the BINISAYA Film Festival in his home province of Cebu. He is the creative producer for Archipelago Film Boutique and currently serves as one of the Executive Cinema Committee for the National Committee for Culture and the Arts (NCCA).",
    ],
    sample: "Keith sample works — to follow",
  },
  {
    role: "Production Head",
    name: "Jero Raguini",
    image: "/team/jero-raguini.jpg",
    imageAlt: "Portrait of Jero Raguini",
    bio: [
      "Jero Raguini has over 18 years of experience in video production and animation. He has directed and overseen numerous high-profile campaigns for global brands including Microsoft, HSBC, ServiceNow and the British Council.",
      "His extensive portfolio spans commercial productions, corporate media and cutting-edge motion design.",
      "Outside of his commercial and creative work, he is an active member of the local sports community, regularly competing in regional tennis tournaments.",
    ],
    sample: "Jero sample works — to follow",
  },
];

export function Team() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section
      id="team"
      className="section-dark relative border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow mb-6">Team</p>
            <h2 className="text-section font-display uppercase">
              Story-led collaborators
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Producers, filmmakers and directors shaping work from development
              to delivery.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <article
              key={member.name}
              className="bg-bg-soft p-8 md:p-10"
            >
              <Reveal delay={0.08 * index}>
                <div>
                  <div className="relative mx-auto mb-8 aspect-square w-28 overflow-hidden rounded-full bg-bg md:float-left md:mx-0 md:mb-5 md:mr-6 md:w-32 lg:w-28 xl:w-32">
                    <Image
                      src={`${basePath}${member.image}`}
                      alt={member.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 128px, (min-width: 768px) 128px, 112px"
                      className="object-cover grayscale"
                    />
                  </div>
                  <p className="eyebrow mb-6">{member.role}</p>
                  <h3 className="font-display text-4xl uppercase leading-none md:text-[2.75rem]">
                    {member.name}
                  </h3>
                  <div className="mt-8 grid gap-5 text-base leading-relaxed text-fg/68 md:text-lg">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-10 font-display text-xs uppercase tracking-[0.22em] text-accent">
                    {member.sample}
                  </p>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

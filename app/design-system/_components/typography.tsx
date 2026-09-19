import { Panel, SectionTitle } from "./panel";

const SPECIMENS = [
  {
    sample: "Ag",
    name: "Playfair Display",
    traits: ["Elegant", "Readable", "Timeless"],
    className: "font-display",
  },
  {
    sample: "Ag",
    name: "Inter",
    traits: ["Clean", "Modern", "Highly legible"],
    className: "font-sans",
  },
];

const SCALE = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"],
];

export function Typography() {
  return (
    <Panel>
      <SectionTitle number="02" title="Typography" />
      <ul className="space-y-8">
        {SPECIMENS.map((specimen) => (
          <li key={specimen.name} className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <span
              className={`${specimen.className} text-[64px] leading-none font-bold text-neutral-900`}
            >
              {specimen.sample}
            </span>
            <div>
              <p className="text-heading-3 text-neutral-900">{specimen.name}</p>
              <p className="mt-1 text-body text-neutral-500">
                {specimen.traits.join(" • ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function TypeScale() {
  return (
    <Panel>
      <SectionTitle number="03" title="Type Scale" />
      <div className="-mx-2 overflow-x-auto px-2">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200">
              {["Style", "Font", "Size / Line Height", "Weight", "Use"].map((head) => (
                <th
                  key={head}
                  scope="col"
                  className="pb-3 pr-6 text-small font-normal text-neutral-500"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCALE.map(([style, font, size, weight, use]) => (
              <tr key={style}>
                <th
                  scope="row"
                  className="py-2.5 pr-6 text-body font-semibold text-neutral-900"
                >
                  {style}
                </th>
                <td className="py-2.5 pr-6 text-body text-neutral-700">{font}</td>
                <td className="py-2.5 pr-6 text-body text-neutral-700">{size}</td>
                <td className="py-2.5 pr-6 text-body text-neutral-700">{weight}</td>
                <td className="py-2.5 text-body text-neutral-700">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

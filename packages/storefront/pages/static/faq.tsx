import type { NextPage } from "next";

import Accordion from "@/components/common/components/accordion";
import PageTitle from "@/components/common/components/pageTitle";
import Container from "@/components/common/components/container";

import { accordionBody } from "../../utils/types";

const accordionList: accordionBody[] = [
  {
    id: "507f1f77bcf86cd799439014",
    title:
      "Donec mattis finibus elit ut tristique?Aenean elit orci, efficitur quis nisl at, accumsan?",
    body: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem Donec mattis finibus elit ut tristique?Aenean elit orci, efficitur quis nisl at, accumsan?Pellentesque habitant morbi tristique senectus et netus?Nam pellentesque aliquam metus?Aenean elit orci, efficitur quis nisl at?Morbi gravida, nisi id fringilla ultricies, elit lorem?Aenean elit orci, efficitur quis nisl at, accumsan",
  },
  {
    id: "507f1f77bcf86cd799439015",
    title: "More Than 30 Years In The Business",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439016",
    title: "100% Organic Foods",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439017",
    title:
      "Donec mattis finibus elit ut tristique?Aenean elit orci, efficitur quis nisl at, accumsan?",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439018",
    title: "100% Organic Foods",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439019",
    title: "Donec mattis finibus elit ut tristique?Aenean elit orci?",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439020",
    title: "Nam liber tempor cum soluta nobis eleifend option?",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439021",
    title: "100% Organic Foods",
    body: " Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
];

const Faq: NextPage = () => {
  return (
    <>
      <PageTitle title="FAQ" />
      <div className="mt-10">
        <Container>
          <div className="pb-5">
            <h4 className="text-lg mb-4 font-semibold">
              Below are frequently asked questions, you may find the answer for
              yourself
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris
              semper augue id nisl aliquet, a porta lectus mattis. Nulla at
              tortor augue. In eget enim diam. Donec gravida tortor sem, ac
              fermentum nibh rutrum sit amet. Nulla convallis mauris vitae
              congue consequat. Donec interdum nunc purus, vitae vulputate arcu
              fringilla quis. Vivamus iaculis euismod dui.
            </p>
          </div>
          <div className="py-5">
            {accordionList?.map((item, index) => (
              <Accordion title={item.title} body={item.body} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Faq;

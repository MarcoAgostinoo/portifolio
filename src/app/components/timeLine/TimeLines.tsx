import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";

export function TimeLines() {
  return (
    <Timeline className="w-9/12 ml-16 lg:ml-24">
      {/* January 2022: Project Initialization */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>January 2022</TimelineTime>
          <TimelineTitle>Project Initialization with Next.js 15</TimelineTitle>
          <TimelineBody>
            Scaffolded the initial project setup using Next.js 15 and configured Flowbite-React and Tailwind CSS for UI components.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* February 2022: Application UI */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>February 2022</TimelineTime>
          <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </TimelineBody>
          <Button color="gray">
            Learn More
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>

      {/* March 2022: Marketing UI */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>March 2022</TimelineTime>
          <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
          <TimelineBody>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* Mid-March 2022: Strapi Integration */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>Mid-March 2022</TimelineTime>
          <TimelineTitle>Integration with Strapi CMS</TimelineTitle>
          <TimelineBody>
            Connected the frontend to a Strapi CMS backend to fetch dynamic
            blog posts and content for a seamless editorial workflow.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* April 2022: E-Commerce UI */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>April 2022</TimelineTime>
          <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>

      {/* May 2022: Deployment */}
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>May 2022</TimelineTime>
          <TimelineTitle>Deployment to Vercel</TimelineTitle>
          <TimelineBody>
            Deployed the fully integrated application to Vercel for production
            hosting, ensuring high performance and scalability.
          </TimelineBody>
          <Button color="gray">
            View Deployment
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

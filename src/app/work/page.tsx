import { Column, Meta, Heading, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";


export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* <Projects /> */}

      <Heading marginBottom="l" variant="display-strong-s" className="text-center">
              Parts of the journey not talked about
            </Heading>
          
            <div className="">
              <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25591147'  width='50%' height='500' className="border-none rounded-full"></iframe>
            </div>
            
    </Column>
  );
}

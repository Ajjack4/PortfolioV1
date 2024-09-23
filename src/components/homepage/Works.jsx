import messagemate from "/src/assets/images/messagemate.webp";

import Projects from "../ui/Projects";
import Heading from "../ui/Heading";
import scrt from "/src/assets/images/Scrt_link.webp";
import seekerra from "/src/assets/images/Seekerra.webp"
import blog from "/src/assets/images/blog.webp"

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://ajjack-messaging.onrender.com/login"
            img={messagemate}
            alt="messagemate website mockup"
            name="messagemate "
            type="Real Time Messaging"
            year="2023"
            tools="React • Nodejs • Mongodb • Socket.io "

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://staging.d1znnlwl9hu7q6.amplifyapp.com/"
            img={scrt}
            alt="Scrt link landing page mockup"
            name="Scrt Link"
            type="Share a secret with a link which only works once and self DESTRUCTS!!"
            year="2024"
            tools="React • Nodejs • Firebase • AWS"
          />
        </div>
        
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/Ajjack4/Blog_App"
            img={blog}
            alt="blog page mockup"
            name="Blog Website"
            type="Microservice Architecture"
            year="2024"
            tools="React • NodeJs • Docker • Kubernetes "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://github.com/Ajjack4/Seekerra"
            img={seekerra}
            alt="Seekerra project mockup"
            name="Seekerra *in development"
            type="Social Media"
            year="2024"
            tools="React • Typescript • Nodejs • Postgresql • Go"
          />
        </div>
        {/* <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div> */}
      </div>
    </section>
  );
}

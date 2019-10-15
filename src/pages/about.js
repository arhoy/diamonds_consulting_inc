import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';
import styled from '@emotion/styled';
import { DefaultPageContainer } from '../components/layouts/PageContainers';
import { H1, H2 } from '../components/reusableStyles/typography/Typography';
import { ListInline } from '../components/reusableStyles/lists/List';
import { ListVertical as ListWithDescription } from '../components/reusableStyles/lists/ListWithDescription';
import currentWebsites from '../constants/currentWebsites';
import { Margin2 } from '../components/reusableStyles/modular/modularStyles';
import currentlyUsing from '../constants/currentlyUsing';
import onlineResources from '../constants/onlineResources';
import dataVisuals from '../constants/data-visuals';
import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';

const AboutStyled = styled.div`
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.darkgrey};
  }
`;

const Div = styled.div`
  padding: 1rem 0rem;
`;

const about = () => {
  return (
    <Layout>
      <DefaultPageContainer>
        <AboutStyled>
          <SEO
            title="About Me"
            description="This is the about me section, Alex Quasar is a mere motral develop and Gatsby is a blazzingly fast static site generator"
          />
          <H1>What is Diamonds</H1>
          <Div>
            <H2>About Me</H2>
            <p>
     
            Lorem ipsum <strong>Diamonds</strong> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Div>

          <Div>
            <H2>Porfolio</H2>
            <p>Select Samples</p>
            <ListInline urls={currentWebsites} />

            <p>
              If you are a local business or small company I can make a
              blazingly fast, amazing website for you at a very affordable cost.
              Unlike most agencies I have multiple payment options and will work
              with you to create a custom built site at a fraction of the cost.
            </p>
          </Div>

          <Div>
            <H2>Current Workflow</H2>
            <p>List of web development tools</p>
            <Margin2>
              <ListWithDescription items={currentlyUsing} />
            </Margin2>
          </Div>
          <Div>
            <H2>Why Gatsby</H2>
            <p>
              I made this site in Gatsby because, as Gatsby puts it, it is
              blazingly fast and built on top of React. I am also a huge fan of
              Gatsby because of its ability to be a progressive web app which
              among other things means it can work offline and is more resilient
              to bad internet connections
            </p>
            <p>
              This coupled with the fact that Gatsby has amazing image
              optimization features means that building a site with Gatsby makes
              it more accessible to users all over the world, especially in
              developing countries. Finally, as a static site generator, Gatsby
              is great for SEO, something React out of the box fails
              spectaculary at.
            </p>
          </Div>

          <Div>
            <H2>Why Contentful</H2>
            <p>
              Contentful is an easy to use, modern headless CMS (content
              management system). It is used by companies like Walmart, Disney,
              Icelandair and Shell to name a few. This fast growing CMS system
              probably is good enough and easy enough for most users. While it
              lack some features I would like to see out of the box, it is
              possible to configure it to your liking on the developer side.
              This decoupling of the developer from the content writer, is
              essential to create efficient content flow and eliminate developer
              bottlenecks.
            </p>

            <p>
              If you are a developer writing your personal blog, I am still on
              the fence of whether contentful is the best choice. I'm currently
              experimenting with mdx and other resources in addition to simply
              creating my own custom CMS or content template. Depending on who
              you ask the later is a bad idea, but it does make complete
              customization and developer freedom possible. Perhaps the best
              solution is you can use Contentful for a lot of article templates
              but maybe not for everything on your site.
            </p>
          </Div>

          <Div>
            <H2>Why Netlify</H2>
            <p>
              Netlify is an amazing service offering hosting, continuous
              deployment and serverless functions for developers. It's generous
              free tier identity/authentication and contact form features are
              invaluable for getting up a working site with minimal overhead,
              time and cost.
            </p>
          </Div>

          <Div>
            <H2>Why React</H2>
            <p>
              Maybe this is an obvious answer to some, but I think every
              developer should ask themselves the question of what a new
              technology, be it language, library or framework offers before
              jumping on the popularity bandwaggon. I use React simply because
              it makes developing in vanilla JavaScript much easier. More
              specifically, it makes DOM manipulation, state management, and
              creating reusable components easier.
            </p>
            <p>
              JavaScript of course is needed to make the front end application
              of your website `come to life` so to speak. It is the defacto
              programming language for web browsers, used to make a dynamic and
              interactive user experience.
            </p>
          </Div>

          <Div>
            <H2>Online Developer Resources</H2>
            <p>List of my go to learning resources for web development</p>
            <Margin2>
              <ListWithDescription items={onlineResources} />
            </Margin2>
          </Div>

          <Div>
            <H2>For Data Visualization</H2>
            <p>Tableau and Power Bi are great for most organizations</p>
            <Margin2>
              <ListWithDescription items={dataVisuals} />
            </Margin2>
          </Div>

          <H2>Contact Me</H2>
          <SimpleNetlifyForm />
          <Hero />
        </AboutStyled>
      </DefaultPageContainer>
    </Layout>
  );
};

export default about;

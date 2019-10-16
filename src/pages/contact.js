import React from 'react';

import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';

import { H1 } from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';
import { Margin2 } from '../components/reusableStyles/modular/modularStyles.js';
import {
  Container800,
  Section,
} from '../components/reusableStyles/sections/Sections';

const contact = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <H1>Contact Page</H1>
          We would love to hear about your data project. Please fill out the
          form below with a brief message
          <SimpleNetlifyForm />
        </Container800>
      </Section>

      <Margin2 />

      <Hero />
    </Layout>
  );
};

export default contact;

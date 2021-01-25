import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { pageContents } from '../../data/dataStore.js';

const FAQ = props => (
  <Container>
    <Hero titleText={props.title} image={props.image} />
    <p>{props.description}</p>
  </Container>
);

FAQ.defaultProps = {
  title: pageContents.titleFAQ,
  description: pageContents.descriptionFAQ,
  image: pageContents.imageFAQ,
};

FAQ.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.node,
};

export default FAQ;
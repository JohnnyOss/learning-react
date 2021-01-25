import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { pageContents } from '../../data/dataStore.js';

const Info = props => (
  <Container>
    <Hero titleText={props.title} image={props.image} />
    <p>{props.description}</p>
  </Container>
);

Info.defaultProps = {
  title: pageContents.titleInfo,
  description: pageContents.descriptionInfo,
  image: pageContents.imageInfo,
};

Info.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.node,
};

export default Info;
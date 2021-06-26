import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Featured from '../../features/Featured/FeaturedContainer';
import Brands from '../../features/Brands/BrandsContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Featured />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <ClientFeedback />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;

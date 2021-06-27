import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Featured from '../../features/Featured/FeaturedContainer';
import Brands from '../../features/Brands/BrandsContainer';
import StickyBar from '../../features/StickyBar/StickyBarContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Featured />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <Brands />
    <StickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;

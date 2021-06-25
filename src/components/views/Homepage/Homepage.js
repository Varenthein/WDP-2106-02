import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Featured from '../../features/Featured/FeaturedContainer';
import Brands from '../../features/Brands/BrandsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Featured />
    <FeatureBoxes />
    <NewFurniture />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;

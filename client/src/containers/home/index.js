import React from 'react';
import Layout from '../../components/Layout';

import BuildingMap from '../building-map/index';
import ParagraphFragment from './ParagraphFragment';
import HeroFragment from './HeroFragment';

export default () => (
  <Layout hero={<HeroFragment />}>
    <BuildingMap />
    <ParagraphFragment />
  </Layout>
);

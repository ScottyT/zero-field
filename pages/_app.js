import '../styles/globals.css'
import '../styles/index.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from '../components/Page';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Teaser from '../components/Teaser';
import Hero from '../components/Hero';

const components = {
  page: Page,
  grid: Grid,
  feature: Feature,
  teaser: Teaser
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

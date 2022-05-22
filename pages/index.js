import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import { StoryblokComponent, useStoryblokState, getStoryblokApi } from '@storyblok/react'

export default function Home({ story }) {
  story = useStoryblokState(story);
  return (
    <>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  // the slug of the story
  let slug = 'home';

  let params = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);
  console.log(data)
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}
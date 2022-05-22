import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
    <div className="px-6" {...storyblokEditable(blok)} key={blok._uid}>
        {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
);

export default Page;
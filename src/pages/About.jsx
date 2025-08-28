// import profilePic from "../assets/profile.jpg";

import Title from "../components/Title";
import ContentContainer from "../components/ContentContainer";

export default function About() {
    return (
        <ContentContainer>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* <img src={profilePic} alt="Profile" className="w-48 h-48 rounded-full shadow-lg" /> */}
                <div
                    className="space-y-4 font-body"
                >
                    <Title>
                        Hi, I'm Collin
                    </Title>
                    <p>
                        I'm a passionate developer and creative thinker who loves learning and building things that make people smile.
                        If I'm not learning, I'm not happy.
                        I'm on my journey to be just on the edge of uncomfortable, trying different industries, facets of work, and becoming a better me.
                        It's never too late to start, so let's see where this takes me and I hope you enjoy a glimpse into my life. 🙂
                    </p>
                    <p>
                        Outside of tech, I’m into whiskey, piano, cooking, video games (okay so maybe still some tech), and new experiences!
                        Being an engineer is awesome but so is experiencing the amazing things that others share with the world.
                        The way every person puts their mark on a feature in a game, the way a whiskey is crafted, the flavors in a dish, or the fluorish in a song is inspiring.
                        If you want to talk about any of those things or share your own experiences, I'm all ears.
                        Happy to share some tasting notes, bottle recs, work experience, and cinnamon rolls - the only food I am 100% confident I can make better than anywhere else.
                    </p>
                    <p>
                        I was feeling a bit of fomo from not putting a personal website/thoughts out into the world so here it is. Don't be a stranger and reach out!
                    </p>
                </div>
            </div>
            {/* Social Links */}
            <div className="mt-8 flex gap-6 items-center justify-center">
                <a
                    href="https://www.linkedin.com/in/your-linkedin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    {/* LinkedIn SVG */}
                    <svg
                        className="w-7 h-7 hover:scale-110 transition hover:text-bourbon-barrel"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                    </svg>
                </a>
                <a
                    href="https://github.com/CollinHowland"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    {/* GitHub SVG */}
                    <svg
                        className="w-7 h-7 hover:scale-110 transition hover:text-bourbon-barrel"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.429.372.825 1.102.825 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576 4.765-1.587 8.2-6.087 8.2-11.385 0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
                <a
                    href="mailto:collin.howland@hotmail.com"
                    aria-label="Email"
                >
                    {/* Email SVG */}
                    <svg
                        className="w-7 h-7 hover:scale-110 transition hover:text-bourbon-barrel"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" />
                    </svg>
                </a>
            </div>
        </ContentContainer>
    );
}
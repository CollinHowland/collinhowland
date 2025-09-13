import Title from "../components/Title";
import ContentContainer from "../components/ContentContainer";
import { projectsList } from "../content/projects/projects-list";
import PostList from "../components/PostList";

export default function Projects() {

    return (
        <ContentContainer>
            <Title>Projects</Title>
            <PostList posts={projectsList} />
        </ContentContainer>
    );
}
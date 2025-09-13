import ContentContainer from "../components/ContentContainer";
import Title from "../components/Title";
import LinkButton from "../components/LinkButton";

export default function NotFound() {
  return (
    <ContentContainer textAlign="text-center">
      <Title>Hello Traveler 🧙‍♂️</Title>
      <p className="p-8 mb-4">Looks like you've gotten lost. Stay as long as you like but there's not much to do around these parts.</p>
      <LinkButton link="/">
        Venture Home
      </LinkButton>
    </ContentContainer>
  );
}
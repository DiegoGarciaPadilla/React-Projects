import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="dgarcia370" isFollowing>
        Diego García Padilla
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" isFollowing={false}>
        Miguel Ángel Durán
      </TwitterFollowCard>
    </section>
  );
}

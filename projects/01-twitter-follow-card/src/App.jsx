import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    name: "Diego García Padilla",
    userName: "dgarcia370",
    isFollowing: true,
  },
  {
    name: "Miguel Ángel Durán",
    userName: "midudev",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { name, userName, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}

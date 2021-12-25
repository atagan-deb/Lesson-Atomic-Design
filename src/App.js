import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "atagan-deb",
  image: "https://source.unsplash.com/K4mSJ7kc0As",
  email: "xxx@yyy.zzz",
  phone: "012-3456-7890",
  company: {
    name: "ATomics"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <h1>Atomic Design!</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

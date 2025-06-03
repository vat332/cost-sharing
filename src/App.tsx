import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const App = () => {
  return (
    <main className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Dodaj znajomego</Button>
      </div>
      <FormSplitBill />
    </main>
  );
};

export default App;

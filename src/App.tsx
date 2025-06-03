import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <main className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}{" "}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Zamknij" : "Dodaj znajomego"}
        </Button>
      </div>
      <FormSplitBill />
    </main>
  );
};

export default App;

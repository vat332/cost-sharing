import { useState } from "react";
import Button from "./Button";

interface Friend {
  name: string;
  image: string;
  balance: number;
  id: string;
}

interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

const FormAddFriend: React.FC<FormAddFriendProps> = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: Friend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> 👩🏽‍🤝‍🧑🏿 Nazwa znajomego</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Wprowadź imię znajomego"
        title="Friend Name"
      />

      <label>🌆 Link do zdjecia</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Wprowadz URL zdjecia"
      />

      <Button>Dodaj</Button>
    </form>
  );
};
export default FormAddFriend;

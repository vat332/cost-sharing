import { useState } from "react";
import Button from "./Button";

type Friend = {
  name: string;
  image: string;
  balance: number;
  id: string;
};

interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

const FormAddFriend = ({ onAddFriend }: FormAddFriendProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://randomuser.me/api/portraits/men/33.jpg"
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://randomuser.me/api/portraits/men/33.jpg");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">Imie znajomego</label>
      <input
        type="text"
        placeholder="Wpisz imię znajomego"
        title="Imię znajomego"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">URL do zdjęcia</label>
      <input
        type="text"
        placeholder="url do zdjęcia"
        title="Zdjęcie"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Dodaj</Button>
    </form>
  );
};

export default FormAddFriend;

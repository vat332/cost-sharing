import { useState } from "react";
import Button from "./Button";

interface Friend {
  name: string;
}

interface FormSplitBillProps {
  selectedFriend: Friend;
  onSplitBill: (amount: number) => void;
}

const FormSplitBill = ({ selectedFriend, onSplitBill }: FormSplitBillProps) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend =
    bill && paidByUser ? Number(bill) - Number(paidByUser) : 0;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -Number(paidByUser));
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Podziel rachniek z {selectedFriend.name}</h2>

      <label>💰 Rachunek</label>
      <input
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        type="number"
        placeholder="Dodaj rachunek"
      />

      <label>🧍‍♀️ Twoje koszty</label>
      <input
        value={paidByUser}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (Number(inputValue) > Number(bill)) {
            setPaidByUser(paidByUser);
          } else {
            setPaidByUser(inputValue);
          }
        }}
        type="number"
        placeholder="Wpisz swoje koszty"
      />

      <label>👩🏽‍🤝‍🧑🏿Wydatki {selectedFriend.name} </label>
      <input
        type="number"
        disabled
        value={paidByFriend}
        placeholder="Wydatki znajomego"
      />

      <label htmlFor="who-is-paying-select">🤑 Kto płaci rachunek</label>
      <select
        id="who-is-paying-select"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Ty</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Podziel rachunek</Button>
    </form>
  );
};

export default FormSplitBill;

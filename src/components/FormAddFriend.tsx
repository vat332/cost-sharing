import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="">Imie znajomego</label>
      <input
        type="text"
        placeholder="Wpisz imię znajomego"
        title="Imię znajomego"
      />
      <label htmlFor="">URL do zdjęcia</label>
      <input type="text" placeholder="url do zdjęcia" title="Zdjęcie" />
      <Button>Dodaj</Button>
    </form>
  );
};

export default FormAddFriend;

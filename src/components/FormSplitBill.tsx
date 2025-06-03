import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Podziel rachunek z X</h2>

      <label htmlFor="">Cały rachunek</label>
      <input type="text" title="Cały rachunek" />

      <label htmlFor="">Twoja część</label>
      <input type="text" title="Twoja część" />

      <label htmlFor="">X część</label>
      <input type="text" title="X część" disabled />

      <label htmlFor="payer-select">Kto płaci rachunek</label>
      <select name="payer" id="payer-select">
        <option value="user">Ty</option>
        <option value="friend">X</option>
      </select>
      <Button>Podziel rachunek</Button>
    </form>
  );
};

export default FormSplitBill;

import useInput from "../../../hooks/useInput";

const UseInput = () => {
  const [firstName, onChangeFirstName] = useInput();
  const [lastName, onChangeLastName] = useInput();

  return (
    <div>
      <input type="text" value={firstName} onChange={onChangeFirstName} />
      <input type="text" value={lastName} onChange={onChangeLastName} />
    </div>
  );
};

export default UseInput;

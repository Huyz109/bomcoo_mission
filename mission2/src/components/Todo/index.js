import { useState } from 'react';

export default function Todo({ title, id, handleDelete }) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <li className={checked ? 'checked' : ''} onClick={toggleCheckbox}>
      {title}
      <span onClick={() => handleDelete(id)} className='close'>{"\u00D7"}</span>
    </li>
  );
}

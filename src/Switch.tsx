import React from 'react';
import './Switch.css';

interface Props{
isOn:boolean,
handleToggle: ((event: React.ChangeEvent<HTMLInputElement>) => void),
onColor: string
}


export default function Switch (props: Props) {
  return (
    <div>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: 'isOn' && props.onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

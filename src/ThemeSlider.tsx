import React from 'react';
import './ThemeSlider.css';

interface Props{
isOn:boolean,
handleToggle: ((event: React.ChangeEvent<HTMLInputElement>) => void),
onColor: string
}


export default function ThemeSlider (props: Props) {
  return (
    <div style={wrapper}>
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

const wrapper: React.CSSProperties = {
  position: 'absolute',
  top: '5%',
  right:'0'
}
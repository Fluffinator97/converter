import React from 'react';
import './ThemeSlider.css';

interface Props{
isOn:boolean,
handleToggle: ((event: React.ChangeEvent<HTMLInputElement>) => void),
}


export default function ThemeSlider (props: Props) {
  return (
    <div style={wrapper}>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        className="themeSlider"
        id={`themeSlider-new`}
        type="checkbox"
      />
      <label
        style={props.isOn ? {background: '#1a1a1d'} : {background: '#DBD5B5'}}
        className="themeSlider-label"
        htmlFor={`themeSlider-new`}
      >
        <span className={`themeSlider-button`} />
      </label>
    </div>
  );
};

const wrapper: React.CSSProperties = {
  position: 'fixed',
  top: '1rem',
  right:'1rem'
}
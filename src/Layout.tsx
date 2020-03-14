import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions'
import ThemeSlider from './Theme/ThemeSlider'

interface Props{
    displayPage: string
}
export default function Layout(props: Props) {
    const [value, setValue] = useState(false);

    function toggleTheme() {
        document.documentElement.classList.add("color-theme-in-transition");
        document.documentElement.setAttribute("data-theme", `${value}`);
        window.setTimeout(() => {
            document.documentElement.classList.remove("color-theme-in-transition");
        }, 1000);

    }

    return (
        <div style={wrapper}>
            <section>
                <p className="text">sw<span><span className="stack bouncing">.</span>
                    <span className="stack">ı</span></span>tch</p>
            </section>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
            </div>
            <ThemeSlider
                isOn={value}
                handleToggle={() => {
                    setValue(!value)
                    toggleTheme()
                }}
            />
            <CurrencyOptions displayPage={props.displayPage}/>
        </div>
    )
}

const wrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyItems: 'space-between',
    margin: '0',
    padding: '2rem',
    height: '100%',
}



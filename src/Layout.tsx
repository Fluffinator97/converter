import React, { useState } from 'react'
import CurrencyOptions from './CurrencyOptions'
import ThemeSlider from './ThemeSlider'

interface Props {
displayImage: React.ReactNode
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

            <ThemeSlider
                isOn={value}
                handleToggle={() => {
                    setValue(!value)
                    toggleTheme()
                }}
            />



            <div style={container}>
                <div style={groupItem}><CurrencyOptions /></div>
                <div style={groupItem}>{props.displayImage}</div>
            </div>

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

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
}

const groupItem: React.CSSProperties = {
    flex: '1 40%',
}

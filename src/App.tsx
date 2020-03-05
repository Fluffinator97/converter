import React from 'react';
import Layout from './Layout';


interface Props {

}
interface State {
  theme: string
}
export default class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      theme: 'light',
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Layout />
        <button onClick={e => this.toggleTheme()}>
      Toggle theme
    </button>
      </div>
    )
  }
}


import React from 'react'
import CurrencyOptions from './CurrencyOptions'

export default function DisplayRender() {
    let cureencyArray = CurrencyOptions()
    return (
        <div style={CurrencyOptions[9] ? { ...defaultContainer, ...wrapper } : { ...invertedContainer, ...wrapper }}>
                    <div style={groupItem}>
                        <CurrencyRow
                            name={'from'}
                            nameInput={'fromInput'}
                            currencyOptions={(this.state.fromOptions)}
                            selectedCurrency={this.state.fromCurrency}
                            onChangeCurrency={(event) => this.changeCurrency(event)}
                            onChangeAmount={(event) => this.changeAmount(event)}
                            amount={fromAmount}
                        />
                        <Flag flagImage={this.state.fromFlag} />
                    </div>
                    <SyncIcon style={{ fontSize: 50 }} onClick={(event: { preventDefault: () => void }) => this.handleClick(event)} />
                    <div style={this.state.isToggleOn ? { ...groupItem } : { ...invertedContainer, ...groupItem }}>
                        <CurrencyRow
                            name={'to'}
                            nameInput={'toInput'}
                            currencyOptions={(this.state.toOptions)}
                            selectedCurrency={this.state.toCurrency}
                            onChangeCurrency={(event) => this.changeCurrency(event)}
                            onChangeAmount={(event) => this.changeAmount(event)}
                            amount={toAmount}
                        />
                        <Flag flagImage={this.state.toFlag} />
                    </div>
                </div >
    )
}

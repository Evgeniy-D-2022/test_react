import React from "react";
import Controls from './Controls';
import Value from "./Value";
import './Counter.css'

class Counter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    }

    state = {
        value: this.props.initialValue,
        }
    
    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }))

        // this.setState(prevState => {
        //     return {
        //         value: prevState.value + 1,
        //     }         
        // })

        // console.log('click up');
        // console.log(this);
    }

    handelDecrement = () => {
        this.setState(prevState => ({
                value: prevState.value - 1,
        }))
        // console.log('click down');
        // // console.log(e.target);
    }
    render() {
        return (
            <div className="Counter">
                <Value 
                value={this.state.value}/>
            {/* <span className="Counter__value">{this.state.value}</span> */}

                <Controls 
                onIncrement={this.handleIncrement}
                onDecrement={this.handelDecrement}/>

            {/* <div className="Counter__controls">
                <button type="button" 
                onClick={this.handleincrement}
                >Увеличить на 1</button>
                <button type="button"
                onClick={this.handelDecrement}
                >Уменьшить на 1</button>
            </div> */}
        </div>
        )
    }
}

export default Counter;
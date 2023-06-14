import React from "react";
import './Counter.css'

class Counter extends React.Component {

    state = {
        value: 5,
        }
    


    handleincrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
           
        })

        // console.log('click up');
        // console.log(this);
    }

    handelDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
           
        })
        // console.log('click down');
        // // console.log(e.target);
    }
    render() {
        return (
            <div className="Counter">
            <span className="Counter__value">{this.state.value}</span>
            <div className="Counter__controls">
                <button type="button" 
                onClick={this.handleincrement}
                >Увеличить на 1</button>
                <button type="button"
                onClick={this.handelDecrement}
                >Уменьшить на 1</button>
            </div>
        </div>
        )
    }
}

export default Counter;
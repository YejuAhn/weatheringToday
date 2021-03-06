import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value != this.props.counter.value){
            
        }   
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    render() { 
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map(counter => 
                    <Counter
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    /> 
                )}
            </div>
        )
    }
}
 
export default Counters;
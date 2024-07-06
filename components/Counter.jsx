import {useSelector, useDispatch} from 'react-redux'
import {increment, incrementByAmount, decrement, decrementByAmount} from '../src/redux/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (

        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <div className="card-body ">
                <div className="card-title mb-5" >Counter Component</div>
                <div className="flex justify-between items-center">
                    <div className="space-x-1">
                        <button className="btn btn-success px-2 text-2xl" onClick={() => dispatch(decrementByAmount(5))}>-5</button>
                        <button className="btn btn-success px-2 text-2xl" onClick={() => dispatch(decrement())}>-</button>

                    </div>
                    <h1 className="text-3xl">{count}</h1>
                    <div className="space-x-1">
                        <button className="btn btn-success px-2 text-2xl" onClick={() => dispatch(increment())}>+
                        </button>
                        <button className="btn btn-success px-2 text-2xl" onClick={() => dispatch(incrementByAmount(5))}>+5
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Counter;

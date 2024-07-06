import Counter from "../components/Counter";
import {useSelector} from 'react-redux'

function HomePage() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div className="container">
      <h1 className='text-3xl text-center my-5 font-semibold'>Hello world! {count}</h1>
        <Counter/>
    </div>
  );
}

export default HomePage;

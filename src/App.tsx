import { decrement, increment, incrementByValue } from "./Redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";

function App() {
  const {count} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-emerald-600 rounded-xl p-10 flex items-center gap-6">
        <button onClick={() => dispatch(incrementByValue(5))} className="bg-emerald-600 rounded-md text-white font-medium px-4 py-3">Imcrement by 5</button>
        <button onClick={() => dispatch(increment())} className="bg-emerald-600 rounded-md text-white font-medium px-4 py-3">Imcrement</button>
        <h1 className="text-xl font-semibold">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="bg-rose-600 rounded-md text-white font-medium px-4 py-3">Decrement</button>
      </div>
    </div>
  )
}

export default App

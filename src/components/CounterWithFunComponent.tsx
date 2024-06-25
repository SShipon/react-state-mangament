import ChildComponent from "./ChildComponent";

type TCount ={
    count?:number,
    setCount:React.Dispatch<React.SetStateAction<number>>
}


const CounterWithFunComponent = ({count, setCount}:TCount) => {
  
    console.log('render')

   

    return (
        <div className='border border-sky-800 mx-auto p-20 m-10'>
            <button className="btn btn-active btn-secondary" onClick={()=> setCount((prev)=> prev +1)}>lick for Update</button>
            <ChildComponent count={count} />
        </div>
    );
};

export default CounterWithFunComponent;
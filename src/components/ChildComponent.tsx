

const ChildComponent = ({count}:{count:number}) => {
    return (
        <div className='border border-green-700 p-10 m-10'>
            <h2>{count}</h2>
          
        </div>
    );
};

export default ChildComponent;
import './input.css'

interface InputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyClick: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleClick: ()=>void;
    value: string;
  }
  

export default function({handleChange,handleKeyClick,handleClick,value}:InputProps){
    return(
        <>
        <div className="inputs">
            <input className='input' type="text" placeholder="Enter new task" value={value} onChange={handleChange} onKeyDown={handleKeyClick} />
            <button className='add_button' onClick={handleClick} >ADD</button>
        </div>
        </>
    )
}
const Select = ({options = [], onSelect}) =>{
    const handleSelect = (e) =>{
      onSelect(e.target.value)
    }
    return(
        <select className="select" onChange={handleSelect}>
          {options.map((el, i)=> <option key={i} value={el.value}>{el.text}</option>)}
        </select>
        
    )
}
export default Select;
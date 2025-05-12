export default function AdminDropdown({ options, onChange }){
    return(
        <select 
            className="h-10 border-1 border-neutral-300 text-neutral-500 rounded-md px-2 outline-neutral-400"
            onChange={(e) => onChange(e.target.value)}
        >
            {
                options
                ? options.map((option, index) => {
                    return(
                        <option value={option} key={index}>{option}</option>
                    )
                })
                :
                <></>
            }
        </select>
    )
}
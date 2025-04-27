export default function AdminDropdown({ options }){
    return(
        <select className="border-1 border-neutral-300 text-neutral-500 rounded-md px-2 outline-neutral-400">
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
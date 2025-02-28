function DashboardTicketDropdown(){
    return(
        <div className="border-1 rounded-sm p-2 border-neutral-200 shadow-xs">            
            <label for="status">Status:</label>

            <select name="status" id="status" className="focus:ring-0 outline-none px-2">
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="on-hold">On Hold</option>
                <option value="closed">Closed</option>
            </select>
        </div>
    )
}

export default DashboardTicketDropdown
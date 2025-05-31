export default function CreateUserPopup({
    handlePopup, 
    handleCreate, 
    onChange, 
    email
}
){
    return(
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="bg-white rounded-sm shadow-xl w-full max-w-lg mx-4 flex flex-col p-4">
        <div className="bg-white text-black py-3 mb-4">
          <h2 className="text-xl font-semibold">Create User</h2>
        </div>
        <div className="flex gap-4">
            <button className="flex-grow text-center text-white bg-[#4AC180] p-2 rounded-sm hover:cursor-pointer mt-4 mx-auto" onClick={handleCreate}>Create</button>
            <button className="flex-grow text-center text-gray-600 border border-gray-300 p-2 rounded-sm hover:cursor-pointer mt-4 mx-auto" onClick={handlePopup}>Cancel</button>
        </div>
      </div>
    </div>
    )
}
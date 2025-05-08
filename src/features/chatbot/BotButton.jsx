export default function BotButton({content}){
    return(
        <button className="border border-[#1D3B5C] text-[#1D3B5C] px-3 py-1 rounded-full text-sm hover:cursor-pointer hovertransition">
            {content}
        </button>
    )
}
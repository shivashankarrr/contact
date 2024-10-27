import React from 'react'

import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

function SingleContact({eachcontact}) {
    const {Name,Email,Phone,Address} = eachcontact
  return (
    <tr className="bg-white/40 h-[3rem] border-b border-black/40 text-black text-center text-black ">
        <td>{Name}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>{Address}</td>
        <td>
            <div className='flex flex-row gap-4 items-center justify-center'><MdEdit className='cursor-pointer hover:text-black/40' />
            <FaTrashAlt className='cursor-pointer hover:text-black/40'/></div>
        
        </td>
            
        
    </tr>
  )
}

export default SingleContact
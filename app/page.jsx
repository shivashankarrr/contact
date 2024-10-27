import Link from 'next/link';
import SingleContact from './Compoents/SingleContact'

export default function Home() {

  const contact = [
    {
      id:1,
      Name : 'shiva shankar',
      Email : "shankuu786@gmail.com",
      Phone: "6303145805",
      Address: "Mallikarjunagiri",

    },
    {
      id:2,
      Name : 'shiva shankar',
      Email : "shankuu786@gmail.com",
      Phone: "6303145805",
      Address: "Mallikarjunagiri",

    }
  ]

  return (
    
    <div className="w=[90%] lg:w-[70%] mx-auto my-[5rem]">
      <div className="text-right">
        <Link href='/addContact'>
        <button type="button" className="px-2 py-3 bg-blue-500 hover:bg-blue-700/50 rounded-lg">Add Contact</button>
        </Link>
      </div>
      <div className='mt-8'>
        <h1 className='text-center text-2xl uppercase py-4'>CONTACT APP</h1>
        <table className='w-full'>
          <tbody>
            <tr className='bg-white/70 h-[4rem] text-black/80'>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
            {contact.map(eachcontact=>(
              <SingleContact eachcontact={eachcontact} key={eachcontact.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

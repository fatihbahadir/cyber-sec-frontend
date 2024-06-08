import React from 'react'

interface HomeTableProps {
    theads: string[],
    data: any[]
}
const HomeTable = ({theads, data} : HomeTableProps) => {
  const getTime = (receivedTime : string) => {

    const dateObj = new Date(receivedTime);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    return `${year}-${month}-${day}`
  }
  return (
    <div className="col-span-6 bg-gradient-to-tr from-[rgba(255,255,255,.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md"> 
    <div className='rounded-2xl bg-gradient-to-tr from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] text-left text-sm w-full px-4 py-4'>
    <table className='w-full'>
        <thead className="border-b border-[rgba(0,0,0,.2)] text-fontColor">      
            <tr>
                {
                    theads.map((text)=>(
                        <th scope="col" className="px-6 py-4">{text}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>

            {
                data.slice(0,5).map((email)=>(
                    <tr
                    className="border-b border-[rgba(0,0,0,.2)] text-fontColor">
                    <td className="whitespace-nowrap px-6 py-4">{email.receivedByName.split(" ")[0]}</td>
                    <td className="whitespace-nowrap px-6 py-4">{email.senderName.split(" ")[0]}</td>
                    <td className="whitespace-nowrap px-6 py-4">{email.subject.length > 10 ? (email.subject.slice(0,10) + "..." ): email.subject}</td>
                    <td className="whitespace-nowrap px-6 py-4">{getTime(email.receivedTime)}</td>

                    </tr>
                ))  
            }
        </tbody>
      </table>
    </div>

    </div>

  )
}

export default HomeTable

import React, { useEffect, useState } from 'react'
import useEmail from '../../hooks/useEmail';
import useAuth from '../../hooks/useAuth';
import axios from "../../services/api";
import Loading from '../../components/CommonComponents/Loading/Loading';
import HomeNav from '../../components/HomeComponents/HomeNav/HomeNav';
import EmailCard from '../../components/EmailComponents/EmailCard/EmailCard';

const Emails = () => {
  const [loading, setLoading] = useState(false);
  const { emails, setEmails } = useEmail();
  const { auth } = useAuth(); 

  const getEmails = async () => {
    try {
      setLoading(true);
      const emailResponse = await axios.get("/email", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      setEmails(emailResponse.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(()=>{
    emails.length < 1 && getEmails();
  }, [])

  return (
    <>

    {
      loading ? (
      <div className="w-full h-full flex items-center justify-center">
      <Loading />
    </div>
      )
     : 
     <div className='flex flex-col px-8 py-8 gap-8 w-full'>
      <HomeNav/>
     <div className='grid w-full grid-cols-12 gap-12'>
       {
        emails.map((email)=>(
          <EmailCard
          key={email._id}
          email={email}
           />
        ))
       }
     </div>
   </div>

    }
    </>
  )
}

export default Emails

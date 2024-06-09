import { useParams } from 'react-router-dom';
import useEmail from '../../../hooks/useEmail';
import { useEffect, useState } from 'react';
import EmailDetailCard from '../../../components/EmailComponents/EmailDetailCard/EmailDetailCard';

const EmailDetails = () => {
  const { id } = useParams();
  const { emails } = useEmail();
  const [email, setEmail] = useState({
    _id: "",
    subject: "",
    receivedTime: "",
    senderName: "",
    receivedByName: "",
    body: ""
  })

  useEffect(()=>{
    setEmail(emails.find((e) => e._id === id))
    }, [emails])

  return (
    <div className='flex items-center justify-center h-screen'>
        <EmailDetailCard email={email}/>
    </div>
  )
}

export default EmailDetails

import { Link } from "react-router-dom"

interface FormBottomProps {
    href: string,
    text: string,
    linkText: string
}

const FormBottom = ({ href, text, linkText} : FormBottomProps) => {
  return (
    <div className='text-center text-second -mt-3 text-xs sm:text-sm '>
        {text}{" "}
    <Link to={href} className='hover:underline'>
      {linkText}
    </Link>
  </div>
  )
}

export default FormBottom

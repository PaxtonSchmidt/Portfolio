import Reat, { Dispatch, ReactNode, SetStateAction } from 'react'
import { Work } from './MoreWorksData'

interface Props {
  children: ReactNode,
  work: Work,
  focusedWork: Work,
  setFocusedWork: Dispatch<SetStateAction<Work>>
}

export const MoreWorksTab: React.FC<Props> = ({ children, focusedWork, setFocusedWork, work  }) => {
  function handleClick() {return setFocusedWork(work)}

  return (
    <button onClick={()=>handleClick} className='bg-transparant mb-1 h-[50px] w-[50px] rounded hover:-translate-y-[1px] hover:drop-shadow-md transition-all duration-300'>
      {children}
    </button>
  )
}
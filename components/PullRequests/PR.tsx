import React, { useEffect } from 'react'

interface Props{

}

//a component that neatly displays PRs?
export const PR: React.FC<Props> = () => {



  async function getRepos(){


  }

  useEffect(()=>{
    const init = {
      method: 'GET',
      mode: 'cors',
    }
    let response = fetch('https://api.github.com/users/');
  }, [])

  return (
    <div>
      Test
    </div>
  )
}
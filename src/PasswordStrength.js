import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import zxcvbn from 'zxcvbn'
function PasswordStrength({password}) {
    const colors = ['darkred', 'red', 'orange', 'yellow', 'green']
    const score = zxcvbn(password).score
    const color = colors[score]
    useEffect(() => {
      if (password === '') return
      console.log(zxcvbn(password))
    }, [password])
  return (
    <div className='strength-meter'>
        {score >= 0 && 
            <div className='strength-bar' style={{backgroundColor: color}}></div>
        }
        {score > 0 &&
            <div className='strength-bar' style={{backgroundColor: color}}></div>
        }
        {score > 1 &&
             <div className='strength-bar' style={{backgroundColor: color}}></div>
        }
        {score > 2 &&
             <div className='strength-bar' style={{backgroundColor: color}}></div>
        }
        {score > 3 &&
             <div className='strength-bar' style={{backgroundColor: color}}></div>
        }
    </div>
  )
}

PasswordStrength.propTypes = {
    password: PropTypes.string
}

export default PasswordStrength

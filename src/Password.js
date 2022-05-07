import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'
import PasswordStrength from './PasswordStrength'

function Password() {
  const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const genPassword = () => {
        let pass = ''
        const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

        for (let i = 1; i < 12; i++)
            pass += i % 4 === 0 ? '-' : alphabet[Math.floor(Math.random() * alphabet.length)]
        setPassword(pass)
    }
    const savePassword = () => {
      dispatch(addPassword(name, password))
      setName('')
      setPassword('')
    }
  return (
    <div className='inputs'>
        <input value={password} placeholder='Click to generate password' onChange={e=>setPassword(e.target.value)}/>
        <PasswordStrength password={password} />
        <input value={name} placeholder='Enter a name for this password' onChange={e=>setName(e.target.value)} />
        <button onClick={genPassword} >Generate password</button>
        <button onClick={savePassword}>Save</button>
    </div>
  )
}

export default Password
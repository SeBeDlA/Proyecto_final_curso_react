import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext'

export default function MyProfile() {
  const [user, setUser] = useState({
    firstName:'',
    lastName: '',
    emailAddress: '',
    phoneNumber: ''
  });

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState({
    type: '',
    message: ''
  })
  const auth = useAuth();

  useEffect(() => {
    let userAux = []
    if(auth.user.displayName){
      userAux = auth.user.displayName.split(' ')
    }
    else{
      userAux[0] = ''
      userAux[1] = ''
    }
    setUser({
      firstName: userAux[0],
      lastName: userAux[1],
      emailAddress: auth.user.email,
      phoneNumber: auth.user.phoneNumber,
    })
  }, [])

  const handleOnChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.updateUser({displayName: user.firstName+' '+user.lastName}).then((resp) => {
      if(resp.type == 'success'){
        setAlertMessage({type: 'success', message: 'Se actualizo el usuario'})
      }else{
        setAlertMessage({type: 'error', message: 'Hubo un error al editar'})
      }
    })
  }
  return (
    <div class="flex mt-10 sm:mt-0 justify-center">
      <div class="mt-5 w-auto">
        <div class="md:grid mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit} method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <Alert className="mb-5" severity={alertMessage.type}>{alertMessage.message}</Alert>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input onChange={handleOnChange} type="text" value={user.firstName} name="firstName" id="firstName" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input onChange={handleOnChange} type="text" value={user.lastName} name="lastName" id="lastName" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input onChange={handleOnChange} type="text" value={user.emailAddress}  disabled name="emailAddress" id="emailAddress" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input onChange={handleOnChange} type="text" value={user.phoneNumber} disabled name="phoneNumber" id="phoneNumber" autocomplete="phone-number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

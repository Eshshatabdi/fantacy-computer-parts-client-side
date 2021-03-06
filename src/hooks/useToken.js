
import { useState, useEffect } from 'react'
const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {


        const email = user?.user?.email;
        console.log(email)
        const currentUser = { email: email };
        if (email) {
            fetch(` https://limitless-spire-51674.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside usetoken', data)
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)


                    setToken(accessToken)

                })
        }

        console.log("user inside token", user)


    }, [user])
    return [token];
}
export default useToken;
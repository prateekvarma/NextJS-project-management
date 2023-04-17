const fetcher = async ({url, method, body, json = true}) => {
    const res = await fetch(url, {
        method,
        ...(body && {body: JSON.stringify(body)}), // vid 15
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    
    if (!res.ok) {
        throw new Error('Api Error')
    }

    if(json) {
        const data = await res.json()
        return data.data
    }
}

export const register = (user) => {
    return fetcher({url: '/api/register', method: 'POST', body: user})
}

export const signin = (user) => {
    return fetcher({url: '/api/signin', method: 'POST', body: user})
}
const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            starships: null
        },
        actions: {
            getStarships: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        starships: {...data}
                    })
                })
            }
        }
    }
}

export default getState;
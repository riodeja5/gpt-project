async function getData() {
    const data = JSON.stringify({
        query: `{
            cooking(menu: 3, numSides:6)
        }`,
    });

    const response = await fetch(
        'http://localhost:4000/graphql',
        {
            method: 'post',
            mode: 'cors',
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const json = await response.json().catch(err => {console.error(err)});
    console.log(json.data);
}

getData();
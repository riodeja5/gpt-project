async function getData() {
    const data = JSON.stringify({
        query: `{
            droid(id: "2000") {
                id,
                name,
                appearsIn,
                friends {
                    id,
                    name,
                    appearsIn
                }
            }
        }`,
    });

    const response = await fetch(
        'http://127.0.0.1:3000/graphql',
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
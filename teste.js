// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDczRP_RHUymrvyr-QW_KEZshKZrnzZikCVFOuaPZy1uBMSWxj-I5rV5Hu2s97UNQcgS1OXhpHCED--xQKxDeefbWb2ykoo9rc_Wwj0ScGfdZIkMCvE-rKjStEsSJeYdzgzVDofmmNfaUzvxJtsBHorHkoyBgwwwMczqjvpw2Ph0rsuKtMJEAb9v4AW50tYfO-pHkGprcVcGAPn6i5FEwl76GTHbP9xq-xwT0UdmB2Xod8BJCpnjMricOsSUqsXGneU2RIPjZrjna_GDmUuD3JZUHDb6l3_7CEOyOUseYk7H3Rky2SIpASwQyZ0';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me',
       'GET',
        'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
    )).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({ name, artists }) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);
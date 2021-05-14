function getIpGeoDetails() {
    let url = "https://api.ipgeolocation.io/ipgeo?apiKey=f89f4fbddf214a4b8be77f0195b94c6b"
    axios.get(url)
        .then((res) => {
            let resData = res.data
            $('#ip').html(resData.ip)
            $('#country').html(resData.country_name)
            $('#state').html(resData.state_prov)
            $('#city').html(resData.city)
            $('#latitude').html(resData.latitude)
            $('#longitude').html(resData.longitude)
            $('#timezone').html(resData.time_zone.name)
            $('#isp').html(resData.isp)
            $('#currency').html(resData.currency.code)
            $('#flag').attr('src', resData.country_flag)
        })
}
getIpGeoDetails()
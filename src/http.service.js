const url = 'https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600'

export default async function getData(){
    const {data} = await fetch(url, {method: 'GET' }).then(data => data.json())
    const {items} = data
    const newItems = {}

    items.map(item => {
        
        const buildingZone = item.buildingzone === 'Other Bay Area' ? 'zOther Bay Area': item.buildingzone

        if(buildingZone !== ''){
            if(newItems[buildingZone])
                newItems[buildingZone].push(item)
            else
                newItems[buildingZone] = [item]
        }

        return item
    })
    const zones = Object.keys(newItems).sort(sortAlph)
    
    zones.forEach(zone => newItems[zone] = newItems[zone].sort(sortAlph))

    return {zones, items: newItems}
}

function sortAlph(a, b){
    if(a < b)
        return -1

    if(a > b)
        return 1

    return 0
}
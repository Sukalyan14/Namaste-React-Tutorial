export const filterData = (searchtxt , restaurant_data) => {

    return restaurant_data.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchtxt.toLowerCase()))
}

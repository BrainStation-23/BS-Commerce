import orderData from '../../../allData/order-data.json';
import shippingData from '../../../allData/shipping-data.json';

function getData() {
    return orderData.orders;
} 

export default getData;
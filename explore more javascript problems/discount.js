/*
1. if ticket numbers is less than 100. per ticket price: 100tk per piece.
 2.if ticket numbers is more than 100, but less than 200, fast 100 ticket will be 100tk and  and rest tickets less than 200 will be 90tk per piece.
3. if you purchase more than 200.
    1-100 -----> 100tk
    101-200 -----> 90tk
    200+ --------> 70tk
*/

function ticketPrice(ticketQuantity) {
    const fast100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * fast100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const fast100price = 100 * fast100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = fast100price + restTicketPrice;
        return totalPrice;
    }
    else {
        const fast100Price = 100 * fast100Rate;
        const second100price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = fast100Price + second100price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(310);
console.log("Ticket price:",price);
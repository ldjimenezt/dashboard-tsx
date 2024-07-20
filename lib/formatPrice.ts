export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-EC", {
        style: "currency",
        currency: "USD",
    }).format(price);
};
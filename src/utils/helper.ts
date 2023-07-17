export const formatCurrency = (
    amount: number,
    currencySymbol: string = "$"
): string => {
    // Convert the amount to a string
    const strAmount: string = amount.toFixed(2).toString();

    // Split the string into the integer and decimal parts
    const parts: string[] = strAmount.split(".");

    // Format the integer part with commas
    const formattedInteger: string = parts[0].replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
    );

    // Combine the integer part, decimal part, and currency symbol
    const formattedAmount: string =
        currencySymbol + formattedInteger + "." + parts[1];

    return formattedAmount;
};

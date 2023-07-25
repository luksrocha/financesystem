const compactNumber = (value: number) => {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const thousand = 1000;

    let index = 0;
    while (value >= thousand && index < suffixes.length - 1) {
        value /= thousand;
        index++;
    }

    return {
        value: Number(value.toFixed(2)),
        suffix: suffixes[index],
    };
};

export const convertToBRLCurrency = (value: number | undefined) => {
    if (!value) return 'R$ 0,00';

    const { suffix, value: compactedNumber } = compactNumber(value);

    const parsedCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 1,
    }).format(compactedNumber);

    return parsedCurrency + suffix;
};

export const convertToUSDCurrency = (value: number | undefined) => {
    if (!value) return 'USD 0,00';

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

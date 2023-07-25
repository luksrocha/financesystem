import { coinsApiAssetsType } from '../types/coinsApiAssetsType';

export const getTopCryptoCurrencies = (cryptos: coinsApiAssetsType[]) => {
    const BRL_IN_USD_PRICE = Number(
        cryptos
            .find((currency) => currency.asset_id === 'BRL')
            ?.price_usd.toFixed(2)
    );

    console.log(BRL_IN_USD_PRICE);

    const topCryptos = cryptos
        .filter((cryptos) => cryptos.type_is_crypto === 1)
        .sort((a, b) => b.price_usd - a.price_usd)
        .slice(0, 10);

    const topCryptosWithBRLPrice = topCryptos.map((crypto) => {
        return {
            ...crypto,
            price_brl: Number(
                ((1 / BRL_IN_USD_PRICE) * crypto.price_usd).toFixed(2)
            ),
        };
    });

    return topCryptosWithBRLPrice;
};

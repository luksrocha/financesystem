import { coinsApiInstance } from '../libs/axios';
import { CoinsApiAssetsImagesType } from '../types/coinsApiAssetsImagesType';
import { CoinsApiAssetsType } from '../types/coinsApiAssetsType';

export const getCoinsApiAssets = async (): Promise<
    CoinsApiAssetsType[] | []
> => {
    try {
        const results = await coinsApiInstance.get<CoinsApiAssetsType[]>(
            'assets'
        );
        return results.data;
    } catch (error) {
        return [];
    }
};

export const getCryptoImages = async () => {
    try {
        const results = await coinsApiInstance.get<CoinsApiAssetsImagesType[]>(
            'assets/icons/32'
        );
        return results.data;
    } catch (error) {
        return [];
    }
};

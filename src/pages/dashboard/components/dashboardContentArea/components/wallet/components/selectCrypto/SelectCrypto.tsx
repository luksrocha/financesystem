import { useCryptoContext } from '../../../../../../../../hooks/useCryptoContext';
import Select, { OptionProps, SingleValue, components } from 'react-select';
import { CoinsApiAssetsType } from '../../../../../../../../types/coinsApiAssetsType';

import './selectCrypto.scss';

interface SelectCryptoProps {
    onChange: (newValue: SingleValue<CoinsApiAssetsType>) => void;
}

const SelectCrypto = ({ onChange }: SelectCryptoProps) => {
    const { cryptos } = useCryptoContext();

    const Option = (props: OptionProps<CoinsApiAssetsType>) => {
        return (
            <components.Option {...props}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {props?.data?.image && (
                        <img src={props.data.image} alt={props.data.asset_id} />
                    )}
                    <span>
                        {props.data.name} {props.data.asset_id}
                    </span>
                </div>
            </components.Option>
        );
    };

    return (
        <Select
            styles={{
                indicatorsContainer: () => ({ height: 48 }),
                dropdownIndicator: () => ({
                    height: 48,
                    color: '#FBAB34',
                }),
            }}
            isMulti={false}
            onChange={onChange}
            className="SelectCrypto"
            options={cryptos}
            getOptionLabel={(option) => option.asset_id}
            getOptionValue={(option) => option.asset_id}
            components={{ Option }}
        />
    );
};

export default SelectCrypto;

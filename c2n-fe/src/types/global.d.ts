import { FC } from 'react'

declare global {
    interface Window {
        TWidgetLogin: any;
        message: any;
        ethereum: any;
        Telegram: any;
        addRegisterAmount: any;
        MSStream: any;
        BinanceChain: any;
    }

}

declare namespace LPN {
    interface NativeCurrency {
        name: string;
        symbol: string;
        decimals: number;
    }

    interface Chain {
        name: string;
        chainId: number;
        logo: FC;
        shortName: string;
        networkId: number;
        nativeCurrency: NativeCurrency;
        rpc: string[];
        faucets: string[];
        infoURL: string;
    }
}
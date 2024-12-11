import * as fs from 'fs';
import * as path from 'path';

export function getSavedContractAddresses() {
    let json: string;
    try {
        json = fs.readFileSync(path.join(__dirname, '../deployments/contract-addresses.json'), 'utf-8')
    } catch (err) {
        json = '{}'
    }
    const addrs = JSON.parse(json)
    return addrs
}
export function getSavedContractABI() {
    let json: string;
    try {
        json = fs.readFileSync(path.join(__dirname, `../deployments/contract-abis.json`), 'utf-8')
    } catch (err) {
        json = '{}'
    }
    return JSON.parse(json)
}

export function getSavedProxyABI() {
    let json: string;
    try {
        json = fs.readFileSync(path.join(__dirname, `../deployments/proxy-abis.json`), 'utf-8')
    } catch (err) {
        json = '{}'
    }
    return JSON.parse(json)
}

export function saveContractAbi(network: string, contract: string, abi: any[]) {
    const abis = getSavedContractABI()
    abis[network] = abis[network] || {}
    abis[network][contract] = abi
    fs.writeFileSync(path.join(__dirname, `../deployments/contract-abis.json`), JSON.stringify(abis, null, '    '))
}

export function saveContractAddress(network: string, contract: string, address: string) {
    const addrs = getSavedContractAddresses()
    addrs[network] = addrs[network] || {}
    addrs[network][contract] = address
    fs.writeFileSync(path.join(__dirname, '../deployments/contract-addresses.json'), JSON.stringify(addrs, null, '    '))
}

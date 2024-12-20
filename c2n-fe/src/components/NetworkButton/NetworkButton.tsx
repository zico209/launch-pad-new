import { useMemo } from 'react'
import styles from './NetworkButton.module.scss'
import { validChains } from '@/config'
import { useAccount, useSwitchChain, useDisconnect } from 'wagmi';
import { Select, SelectProps } from 'antd';
import { useChains } from 'wagmi'

/**
 * Button that connect wallet or show current account
 */
export default function NetworkButton() {

  const { address, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const chains = useChains();


  const options: SelectProps['options'] = useMemo(() => chains.map((item, i) => {
    return {
      label: item.name,
      value: item.id
    }
  }), [validChains, chainId])

  const chainMeta = useMemo(() => {
    let target = validChains.find((item) => { return item?.chainId == chainId });
    return target;
  }, [chainId]);

  return (
    <Select
      defaultValue={1}
      options={options}
      onChange={(val) => switchChain({ chainId: val })}
    >
    </Select>
  )
}
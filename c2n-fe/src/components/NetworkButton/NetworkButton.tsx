import { useMemo } from 'react'
import styles from './NetworkButton.module.scss'
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
  }), [chainId])

  return (
    <Select
      defaultValue={1}
      options={options}
      onChange={(val) => switchChain({ chainId: val })}
    >
    </Select>
  )
}
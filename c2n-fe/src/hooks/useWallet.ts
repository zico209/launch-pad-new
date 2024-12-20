'use client'
import { useRef, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { setSigner, setWalletAddress } from '@/lib/features/contract'
import { setChain } from '@/lib/features/wallet'
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
import { message } from 'antd'
import { validChains } from '@/config'
'use client'
import React from 'react';
import { Modal, Col } from 'antd';
import styles from './WalletModal.module.scss';
import { useConnect } from '@/hooks/useConnect';

type WalletModalProps = {
    isOpen: boolean; // 控制 Modal 显示状态
    onCancel: () => void; // 关闭 Modal 的回调函数
};

export const WalletModal = ({ isOpen, onCancel }: WalletModalProps) => {
    const { connectors, connect } = useConnect();

    const connectPanel = (
        <div>
            Connect wallet
            {connectors.map((connector, index) => {
                return (
                    <Col
                        className={styles['connect-button']}
                        span={24}
                        key={index}
                        onClick={() =>
                            connect(
                                { connector },
                                { onSuccess: () => onCancel() }
                            )
                        }
                    >
                        <img src={connector.icon} alt={connector.name} />
                        <span
                            style={{
                                fontSize: '18px',
                                color: '#000000',
                                marginLeft: '12px',
                            }}
                        >
                            {connector.name}
                        </span>
                    </Col>
                );
            })}
        </div>
    );

    return (
        <Modal
            title={null}
            open={isOpen} // 使用外部传入的 isOpen 控制显示
            onCancel={onCancel} // 使用外部传入的 onCancel 关闭 Modal
            footer={null}
        >
            {connectPanel}
        </Modal>
    );
};

import React, { FunctionComponent, useEffect, useState } from 'react';
import { Typography } from 'antd';
import styles from './ErrorMsg.scss';
import { getErrMsg } from '../../utils/error-msgs';

const { Text } = Typography;

export const ErrorMsg: FunctionComponent = () => {
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    const getErrMsgAsync = async () => {
      const errMsg = await getErrMsg();
      setErrorMsg(errMsg);
    };

    getErrMsgAsync().catch(console.error);
  }, []);

  return <Text className={styles.error}>{errorMsg}</Text>;
};

import Button from 'components/Button';
import { useDownload } from 'hooks/useDownload';
import { useRef, useState } from 'react';
import Preview from './Preview';
import Settings from './Settings';
import styles from './styles.module.css';

const WasWarned = () => {
  const [warn, setWarn] = useState<Warn>({
    name: '',
    tag: '0000',
    icon: '',
    reason: '悪い言葉の使用'
  });

  const handleChange = (key: keyof Warn, value: string) => {
    setWarn({
      ...warn,
      [key]: value,
    });
  };

  const ref = useRef(null);

  const download = useDownload(ref, `${warn.name}#${warn.tag}_warning`);

  return (
    <>
      <h1>警告されました</h1>
      <Settings warn={warn} onChange={handleChange} />
      <h2>Preview</h2>
      <Preview ref={ref} {...warn} />
      <Button className={styles.download} onClick={download}>Download</Button>
    </>
  )
}

export default WasWarned;

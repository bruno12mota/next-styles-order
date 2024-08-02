import LinkButton from '@clutch-marketplace/clutch-content.base-ui/dist/components/LinkButton';
import LocalButton from './local-button';
import styles from './page.module.css';

export default function Page(props) {
  return (
    <>
      <h1>Homepages</h1>
      <LinkButton href="/about" text='External Button' className={styles.differentBg} />
      <LocalButton className={styles.differentBg}>Local Button</LocalButton>
    </>
  )
}
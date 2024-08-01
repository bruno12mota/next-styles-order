import LinkButton from '@clutch-marketplace/clutch-content.base-ui/dist/components/LinkButton';
import styles from './page.module.css';

export default function Page(props) {
  return (
    <>
      <h1>Homepages</h1>
      <LinkButton href="/about" text='About' className={styles.differentBg} />
    </>
  )
}
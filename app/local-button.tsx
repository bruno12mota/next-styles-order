import cx from 'classnames';
import styles from './local-button.module.css';

export default function LocalButton(props) {
  return (
    <button className={cx(styles.button, props.className)}>{props.children}</button>
  )
}
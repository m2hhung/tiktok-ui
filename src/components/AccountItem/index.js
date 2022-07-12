import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17937206d75158670a293f5caa5b6dda~c5_300x300.webp?x-expires=1656640800&x-signature=qiBY0S2cSq4HXyiM%2FtEU%2B6MnS50%3D"
        alt="asdfasdf"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;

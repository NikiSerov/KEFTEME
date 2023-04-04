import { FC } from 'react';
import s from './UserData.module.scss';

interface UserDataProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const UserData: FC<UserDataProps> = ({ firstName, lastName, email }) => {
  return (
    <div className={s.userData}>
      <div>
        <span className={s.accentText}>First name: </span>
        {firstName}
      </div>
      <div>
        <span className={s.accentText}>Last name: </span>
        {lastName}
      </div>
      <div>
        <span className={s.accentText}>Email: </span>
        {email}
      </div>
    </div>
  );
};

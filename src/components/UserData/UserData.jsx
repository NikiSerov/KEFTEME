import s from "./UserData.module.scss";

export const UserData = ({ firstName, lastName, email }) => {
  return (
    <div className={s.userData}>
      <p className={s.firstName}>
        <span className={s.accentText}>First name: </span>
        {firstName}
      </p>
      <p className={s.lastName}>
        <span className={s.accentText}>Last name: </span>
        {lastName}
      </p>
      <p className={s.userEmail}>
        <span className={s.accentText}>Email: </span>
        {email}
      </p>
    </div>
  );
};

import styles from './Logo.module.scss';
//  import 'animate.css';

export default function Logo() {
return (
  <div className="animate__animated animate__heartBeat animate__infinite">
  <div className={styles.Logo}>
    <div>Shu's</div>
    <div>BS</div>
  </div>
  </div>
);
}
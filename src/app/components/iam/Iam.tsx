import styles from "./iam.module.css";

export default function Iam() {
  return (
    <div className={styles.profile}>
      <div className={styles.imgProfile}>
        <img src="/perfil.jpg" alt="" />
      </div>
      <div className={styles.textProfile}>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ducimus
          illum nisi laborum explicabo quis ipsam quas eius architecto.
          Necessitatibus aut tenetur rerum nam, rem veniam laborum in sapiente
          exercitationem.
        </h1> <br />
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ducimus
          illum nisi laborum explicabo quis ipsam quas eius architecto.
          Necessitatibus aut tenetur rerum nam, rem veniam laborum in sapnte
          exercitationem.
        </h1> <br />
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ducimus
          illum nisi laborum explicabo quis ipsam quas eius architecto.
          Necessitatibus aut tenetur rerum nam, rem veniam laborum in sapnte
          exercitationem.
        </h1> <br />    
        <button className={styles.buttonProfile}>Download CV</button>
      </div>
    </div>
  );
}

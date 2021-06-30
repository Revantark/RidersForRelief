import React,{useEffect} from 'react'
import styles from  './aboutStyles.module.css'
import Navbar from '../global_ui/nav'

function About() {
    useEffect(() => {
        
        
    }, [])
    return (
        <div
        className={styles.about}        
        >
            <Navbar title="About" style={{backgroundColor:'#79CBC5',color:'black' }}/>            

            <q
            className={styles.quotedText}>
            Lorem ipsum dolor sit amet consectetur ipsum!
            </q>                  

            <section 
            className={styles.aboutContent}
            style={{
                backgroundImage: `url('/assets/blurredlogo.png')` ,
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                minWidth:'350px',
                padding:'20px',
                marginBottom:'30px'
            }}
            >               
                <p 
                style={{
                    boxShadow: '2px #888888',
                    borderRadius:'5px',
                    minWidth:'300px',
                    maxWidth:'450px',
                    textAlign:'center',
                    backgroundColor:'transparent', 
                    fontSize:'30px'               
                }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel porro, id magni exercitationem architecto asperiores iure consequuntur nesciunt facere. Voluptatibus minus ipsum eaque rerum laboriosam ex? Ab necessitatibus totam ratione.
                </p>
            </section>

            <section style={{ height:'400px'}} >
            <div className={styles.founderNote}>
                <div className={styles.founderContent}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nostrum repudiandae eum corrupti, nisi, earum recusandae rerum dolore minima suscipit saepe dolores, quas quisquam praesentium. Dolorum totam consequuntur illum nemo?
                </div>
                <img 
                className={styles.founderImg}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEr-saR2xBf7GrT5wx3oL_o8M-ZodrZtDnQ&usqp=CAU" alt="" />

            

            </div>
            

            </section>

            <footer >
                <h2>Relief Riders</h2>
                <p className="footer-container-1">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>

                </p>
            </footer>
            
                                                        
        </div>
    )
}

export default About

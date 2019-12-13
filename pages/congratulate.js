import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import Button from '@material-ui/core/Button';

const congradulate = (props) => (
<div className="main-wrapper">
    <Head>
        <title>Congratulations {props.query}</title>
    </Head>
    <div className="shapesleft">
        <span className="rect1"/>
        <span className="rect2"/>
        <span className="rect3"/>
        <span className="rect4"/>
        <span className="rect5"/>
    </div>
    <div className="shapesright">
        <span className="rect1"/>
        <span className="rect2"/>
        <span className="rect3"/>
        <span className="rect4"/>
        <span className="rect5"/>
    </div>
    <div className="main-content">
        <div className="Congratulations-wrapper text-center">
            <Typography variant="h2" ><strong>Certificate of Achievement</strong></Typography>
            <Typography variant="subtitle1" gutterBottom><i>THIS ACKNOWLEDGES THAT</i></Typography>
            <br/>
            <div className="borders">
                <Typography variant="h3" ><strong>{props.query}</strong></Typography>
            </div>
            <br/>
            <Typography variant="subtitle1">HAS SUCCESSFULLY COMPLETED THE</Typography>
            <h1><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png" style={{height:'45px', width:'auto', transform:"translate(0,14px)"}}/> CODE-IN 2019</h1>
        </div>
        <div className="text-center">
            <Typography variant="h6" gutterBottom>View all of your progress:       <Button variant="contained" color="primary" href="https://codein.withgoogle.com/dashboard/">Here</Button></Typography>
        </div>
    </div>
    <style jsx>{`
            body{
                overflow-x:hidden !important;
            }
            .main-wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100vw;
                height: 100vh;
                flex-direction: column;
            }
            .Congratulations-wrapper{
                align-self: center;
                margin:auto;
            }
            .text-center {
                text-align: center!important;
            }
            .borders{
                border-style:solid;
                border-color:#287EC7;
                border-left-style:none;
                border-right-style:none;
                padding:1%;
            }

            /*shapes left*/
            .shapesleft{
                position:absolute;
                transform: rotate(31.17deg);
                left: 120px;
                
            }
            .rect1{
                position: absolute;
                width: 7.47px;
                height: 384.4px;
                background: #2EA859;
                right: -50px;
                top:-200px
            }
            .rect2{
                position: absolute;
                width: 14.84px;
                height: 618.35px;
                background: #3F85F1;
                top:-300px;
            }
            .rect3{
                position: absolute;
                width: 7.47px;
                height: 384.4px;
                background: #2EA859;
                right: 100px;
                top:-300px;
            }
            .rect4{
                position: absolute;
                width: 7.47px;
                height: 384.4px;
                background: #EC4336;
                right: -100px;
                top:-120px;
            }
            .rect5{
                position: absolute;
                width: 20.81px;
                height: 397.49px;
                background: #FDBC28;
                right:50px;
                top:-330px;
            }

            /*shapes right*/
            .shapesright{
                position:absolute;
                transform: rotate(31.17deg);
                right: 200px;
            }
            
            @media(max-width:1199px){
                .shapesright{
                    display:none;
                }
                .shapesleft{
                    display:none;
                }
            }
        `}</style>
</div>
)

congradulate.getInitialProps = async function({ query }) {
    const c = query.c
    return{
        query: c
    }
}

export default congradulate;    